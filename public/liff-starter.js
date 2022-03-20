window.onload = async function () {
  const useNodeJS = true;
  const defaultLiffId = '';
  let myLiffId = '';

  if (useNodeJS) {
    try {
      const res = await Fetch({
        method: 'GET',
        path: `api/liff/get-liff-id`,
      });
      myLiffId = res.id;
      initializeLiffOrDie(myLiffId);
    } catch (error) {
      _nodeJsLiffIdError();
    }
  } else {
    myLiffId = defaultLiffId;
    initializeLiffOrDie(myLiffId);
  }
};

/**
 * Check if myLiffId is null. If null do not initiate liff.
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiffOrDie(myLiffId) {
  if (!myLiffId) {
    _liffIdError();
  } else {
    initializeLiff(myLiffId);
  }
}

/**
 * Check if myLiffId is null. If null do not initiate liff.
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiff(myLiffId) {
  liff
    .init({ liffId: myLiffId })
    .then(() => {
      //   alert(true);
      liff.ready.then(() => {
        initializeApp();
      });
    })
    .catch((err) => {
      //   alert(false);
      _liffInitError();
    });
}

function initializeApp() {
  displayIsInClientInfo();
}

function displayIsInClientInfo() {
  if (liff.isInClient()) {
    _initiazeSuccess();
  } else {
    Element.enableAndSetElementById(
      'liffAppErrorContent',
      '<h3>Please access at Application Line only.</h3>',
    );
    liff.logout();
  }
}

// ---------- content --------- //

function _initiazeSuccess() {
  Element.disableById('loading');
  Element.enableById('liffAppContent');
  if (liff.isLoggedIn()) {
    Element.disableById('liffLoginButton');
    Element.enableById('liffLogoutButton');
  } else {
    Element.disableById('liffLogoutButton');
    Element.enableById('liffLoginButton');
  }
}

function _liffIdError() {
  //  <!-- LIFF ID ERROR -->
  const _errorMessage = `
      <div id="liffIdErrorMessage" class="text-red">
          <p>You have not assigned any value for LIFF ID.</p>
          <p>If you are running the app using Node.js, please set the LIFF ID </p>
        </div>
`;
  Element.enableAndSetElementById('liffAppErrorContent', _errorMessage);
}
function _liffInitError() {
  //   <!-- LIFF INIT ERROR -->
  const _errorMessage = `
    <div id="liffInitErrorMessage" class="text-red">
    <p>Something went wrong with LIFF initialization.</p>
    <p>LIFF initialization can fail if a user clicks "Cancel" on the "Grant permission" screen, or if an error
    occurs in the process of <code>liff.init()</code>.</p>
    </div>
`;
  Element.enableAndSetElementById('liffAppErrorContent', _errorMessage);
}
function _nodeJsLiffIdError() {
  //  < !--NODE.JS LIFF ID ERROR-- >
  const _errorMessage = `
    <div id="nodeLiffIdErrorMessage" class="text-red">
    <p>Unable to receive the LIFF ID as an environment variable.</p>
    </div>
`;
  Element.enableAndSetElementById('liffAppErrorContent', _errorMessage);
}

const Element = {
  setById: (elementId, innerHTML) => {
    document.getElementById(elementId).innerHTML = innerHTML;
  },
  enableById: (elementId) => {
    document.getElementById(elementId).classList.remove('hidden');
  },
  removeById: (elementId) => {
    document.getElementById(elementId).remove();
  },
  disableById: (elementId) => {
    document.getElementById(elementId).classList.add('hidden');
  },
  enableAndSetElementById: (elementId, innerHTML) => {
    Element.removeById('loading');
    Element.removeById('liffAppContent');

    Element.enableById(elementId);
    Element.setById(elementId, innerHTML);
  },
};
const Handlers = {
  login: () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  },
  logout: () => {
    if (liff.isLoggedIn()) {
      liff.logout();
      window.location.reload();
    }
  },
};

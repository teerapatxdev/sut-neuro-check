const resultData = {
  firstname: localStorage.getItem('firstname'),
  lastname: localStorage.getItem('lastname'),
  weight: localStorage.getItem('weight'),
  height: localStorage.getItem('height'),
  age: localStorage.getItem('age'),
  disease: localStorage.getItem('disease'),
  result: localStorage.getItem('result'),
};

function alertConfirm() {
  Swal.fire({
    html: `<p style="font-size: 19px;">ยืนยันการส่งเข้าแชทไลน์ ?<p>`,
    icon: 'question',
    showCancelButton: true,
    cancelButtonColor: '#b4b4b4',
    confirmButtonText: 'ยืนยัน',
    cancelButtonText: 'ยกเลิก',
  }).then((result) => {
    if (result.isConfirmed) {
      sendLine(resultData);
    }
  });
}

async function main() {
  liff.ready.then(() => {
    if (liff.isLoggedIn()) {
    } else {
      liff.login('/heaven/login');
    }
  });
  await liff.init({ liffId: projectConfig.liffId });
}

async function sendLine(data) {
  const res = await Fetch({
    method: 'POST',
    token: liff.getAccessToken(),
    path: `/api/gcs/send-line`,
    data: data,
  });
  if (res.status === 200) {
    Swal.fire({
      icon: 'success',
      html: `<span style="font-size: 18px;">ทำการส่งผลประเมินเข้าแชทไลน์สำเร็จ</span>`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        liff.closeWindow();
      } else {
        localStorage.clear();
        liff.closeWindow();
      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      html: `<span style="font-size: 20px;">เกิดข้อผิดพลาด</span>`,
    });
  }
}

class CardResult extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {
    await main();
    if (resultData.result) {
      let result = '';
      let disease = '';
      if (Number(resultData.result) >= 13 && Number(resultData.result) <= 15) {
        result = `
              <div class="show-img">
                  <img class="icon-result-good" src="../../../assets/images/good.png">
              </div>
              <p class="result-header-good">บาดเจ็บที่ศีรษะเล็กน้อย</p>`;
      } else if (
        Number(resultData.result) >= 9 &&
        Number(resultData.result) <= 12
      ) {
        result = `
              <div class="show-img">
                  <img class="icon-result" src="../../../assets/images/danger.png">
              </div>
              <p class="result-header">บาดเจ็บที่ศีรษะปานกลาง</p>`;
      } else {
        result = `
              <div class="show-img">
                  <img class="icon-result" src="../../../assets/images/very-danger.png">
              </div>
              <p class="result-header">บาดเจ็บที่ศีรษะรุนแรง</p>`;
      }

      if (resultData.disease) {
        disease = `<p class="p-col-2">${resultData.disease}</p>`;
      } else {
        disease = `<p class="p-col-2">ไม่มี</p>`;
      }
      const data = `
          <div class="card-result">
              <div class="content-center">
                  ${result}
                  <div class="content-user">
                      <div class="hr-center">
                        <div class="hr-user"></div>
                      </div>
                      <p class="data-header">ข้อมูลผู้ทำแบบประเมิน</p>
                      <div class="d-row">
                          <p class="p-col-1">ชื่อ-นามสกุล :</p>
                          <p class="p-col-2">${
                            resultData.firstname + ' ' + resultData.lastname
                          }</p>
                      </div>
                      <div class="d-row">
                          <p class="p-col-1">อายุ :</p>
                          <p class="p-col-2">${
                            resultData.age
                          }<span>ปี</span></p>
                      </div>
                      <div class="d-row">
                          <p class="p-col-1">น้ำหนัก :</p>
                          <p class="p-col-2">${
                            resultData.weight
                          }<span>kg.</span></p>
                      </div>
                      <div class="d-row">
                          <p class="p-col-1">ส่วนสูง :</p>
                          <p class="p-col-2">${
                            resultData.height
                          }<span>cm.</span></p>
                      </div>
                      <div class="d-row">
                          <p class="p-col-1">โรคประจำตัว :</p>
                          ${disease}
                      </div>
                  </div>
                  <div class="button-center">
                    <button type="submit" id="submitButton" class="btn btn-dark" onclick="alertConfirm()">ส่งผลการประเมินเข้าแชทไลน์</button>
                  </div>
              </div>
          </div>`;

      this.innerHTML = String(data).replace(/,(?!["{}[\]])/g, '');
    } else {
    }
  }
}
customElements.define('card-result', CardResult);

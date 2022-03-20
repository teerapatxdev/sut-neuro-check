const userData = {
  firstname: localStorage.getItem('firstname'),
  lastname: localStorage.getItem('lastname'),
  weight: localStorage.getItem('weight'),
  height: localStorage.getItem('height'),
  age: localStorage.getItem('age'),
  disease: localStorage.getItem('disease'),
  result: localStorage.getItem('result'),
};
let textResult = '';
let isInTime = true;

const resultData = JSON.parse(localStorage.getItem('result'));

function diff_hours() {
  const dateNow = moment(new Date()).format('MMMM DD, YYYY HH:mm:00');
  const dateUser = moment(new Date()).format(
    `MMMM DD, YYYY ${resultData.answer_T}:00`,
  );
  const dt1 = new Date(dateNow);
  const dt2 = new Date(dateUser);
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;

  return Math.abs(diff.toFixed(2));
}

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
      sendLine(userData);
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
  data.flex_message = textResult;
  if (resultData.answer_T) {
    data.time = resultData.answer_T;
    data.isInTime = isInTime;
  }
  const res = await Fetch({
    method: 'POST',
    token: liff.getAccessToken(),
    path: `/api/befast/send-line`,
    data: data,
  });
  if (res.status === 200) {
    Swal.fire({
      icon: 'success',
      html: `<span style="font-size: 18px;">ทำการส่งผลประเมินเข้าแชทไลน์สำเร็จ</span>`,
    }).then((result) => {
      if (result.isConfirmed) {
        // localStorage.clear();
        // liff.closeWindow();
      } else {
        // localStorage.clear();
        // liff.closeWindow();
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
    if (userData.result) {
      let disease = '';
      if (userData.disease) {
        disease = `<p class="p-col-2">${userData.disease}</p>`;
      } else {
        disease = `<p class="p-col-2">ไม่มี</p>`;
      }

      let showTime = '';
      if (resultData.answer_T) {
        const diffHours = diff_hours();
        if (diffHours > 4.5) {
          isInTime = false;
          showTime = `
          <p class="result-note" style="color: red;">เวลาแสดงอาการของท่านเกินเวลาที่สามารถรักษาแบบให้ยาได้</p>
          <p class="note-footer">โปรดรีบนำส่งโรงพยาบาลใกล้บ้าน</p>
          <p style="text-align: center; margin-top: 10px;">หรือติดต่อ 1669</p>`;
        } else {
          isInTime = true;
          showTime = `
          <p class="result-note" style="color: red;">ท่านยังสามารถเข้ารับการรักษาได้ทันเวลา</p>
          <p class="note-footer">โปรดรีบนำส่งโรงพยาบาลใกล้บ้าน</p>
          <p style="text-align: center; margin-top: 10px;">หรือติดต่อ 1669</p>`;
        }
      }

      if (
        resultData.answer_B == false &&
        resultData.answer_E == false &&
        resultData.answer_F == false &&
        resultData.answer_A == false &&
        resultData.answer_S == false
      ) {
        textResult = 'ไม่มีความเสี่ยง';
        const data = `
          <div class="card-result">
            <div class="content-center">
              <div class="show-img">
                <img class="icon-result-good" src="../../../assets/images/good.png">
              </div>
              <p class="result-header-good">ท่านไม่มีความเสี่ยง</p>
              <p class="result-header" style="margin-top: 15px">ที่จะเป็นโรคหลอดเลือดในสมอง</p>
              <div class="content-user">
                <div class="hr-center">
                  <div class="hr-user"></div>
                </div>
                <p class="data-header">ข้อมูลผู้ทำแบบประเมิน</p>
                <div class="d-row">
                  <p class="p-col-1">ชื่อ-นามสกุล :</p>
                  <p class="p-col-2">${
                    userData.firstname + ' ' + userData.lastname
                  }</p>
                </div>
                <div class="d-row">
                  <p class="p-col-1">อายุ :</p>
                  <p class="p-col-2">${userData.age}<span>ปี</span></p>
                </div>
                <div class="d-row">
                  <p class="p-col-1">น้ำหนัก :</p>
                  <p class="p-col-2">${userData.weight}<span>kg.</span></p>
                </div>
                <div class="d-row">
                  <p class="p-col-1">ส่วนสูง :</p>
                  <p class="p-col-2">${userData.height}<span>cm.</span></p>
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
      } else if (
        resultData.answer_B == true &&
        resultData.answer_E == false &&
        resultData.answer_F == false &&
        resultData.answer_A == false &&
        resultData.answer_S == false
      ) {
        textResult = 'ความเสี่ยงต่ำ';
        const data = `
            <div class="card-result">
              <div class="content-center">
                <div class="show-img">
                  <img class="icon-result-good" src="../../../assets/images/warning.png">
                </div>
                <p class="result-header">อาการ และอาการของท่าน</p>
                <p class="result-header" style="margin-top: 15px">อยู่ในระดับเสี่ยงต่ำ</p>
                <p class="result-note">อาการ และอาการแสดงของท่านควรได้รับการวินิจฉัยและรับคำแนะนำจากแพทย์เพิ่มเติม</p>
                <div class="content-user">
                  <div class="hr-center">
                    <div class="hr-user"></div>
                  </div>
                  <p class="data-header">ข้อมูลผู้ทำแบบประเมิน</p>
                  <div class="d-row">
                    <p class="p-col-1">ชื่อ-นามสกุล :</p>
                    <p class="p-col-2">${
                      userData.firstname + ' ' + userData.lastname
                    }</p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">อายุ :</p>
                    <p class="p-col-2">${userData.age}<span>ปี</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">น้ำหนัก :</p>
                    <p class="p-col-2">${userData.weight}<span>kg.</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">ส่วนสูง :</p>
                    <p class="p-col-2">${userData.height}<span>cm.</span></p>
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
      } else if (
        resultData.answer_B == true &&
        resultData.answer_E == 'case-1' &&
        resultData.answer_F == false &&
        resultData.answer_A == false &&
        resultData.answer_S == false
      ) {
        textResult = 'ความเสี่ยงต่ำ';
        const data = `
            <div class="card-result">
              <div class="content-center">
                <div class="show-img">
                  <img class="icon-result-good" src="../../../assets/images/warning.png">
                </div>
                <p class="result-header">อาการ และอาการของท่าน</p>
                <p class="result-header" style="margin-top: 15px">อยู่ในระดับเสี่ยงต่ำ</p>
                <p class="result-note">อาการ และอาการแสดงของท่านควรได้รับการวินิจฉัยและรับคำแนะนำจากแพทย์เพิ่มเติม</p>
                <div class="content-user">
                  <div class="hr-center">
                    <div class="hr-user"></div>
                  </div>
                  <p class="data-header">ข้อมูลผู้ทำแบบประเมิน</p>
                  <div class="d-row">
                    <p class="p-col-1">ชื่อ-นามสกุล :</p>
                    <p class="p-col-2">${
                      userData.firstname + ' ' + userData.lastname
                    }</p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">อายุ :</p>
                    <p class="p-col-2">${userData.age}<span>ปี</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">น้ำหนัก :</p>
                    <p class="p-col-2">${userData.weight}<span>kg.</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">ส่วนสูง :</p>
                    <p class="p-col-2">${userData.height}<span>cm.</span></p>
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
      } else if (
        resultData.answer_B == true &&
        resultData.answer_E == 'case-2' &&
        resultData.answer_F == false &&
        resultData.answer_A == false &&
        resultData.answer_S == false
      ) {
        textResult = 'ความเสี่ยงสูง';
        const data = `
            <div class="card-result">
              <div class="content-center">
                <div class="show-img">
                  <img class="icon-result-good" src="../../../assets/images/very-danger.png">
                </div>
                <p class="result-header">ท่านมีความเสี่ยง</p>
                <p class="result-header" style="margin-top: 15px">เป็นโรคหลอดเลือดสมองระดับสูง</p>
                <p class="result-note">เวลาที่แสดงอาการ ${
                  resultData.answer_T
                } น.</p>
                ${showTime}
                <div class="content-user">
                  <div class="hr-center">
                    <div class="hr-user"></div>
                  </div>
                  <p class="data-header">ข้อมูลผู้ทำแบบประเมิน</p>
                  <div class="d-row">
                    <p class="p-col-1">ชื่อ-นามสกุล :</p>
                    <p class="p-col-2">${
                      userData.firstname + ' ' + userData.lastname
                    }</p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">อายุ :</p>
                    <p class="p-col-2">${userData.age}<span>ปี</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">น้ำหนัก :</p>
                    <p class="p-col-2">${userData.weight}<span>kg.</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">ส่วนสูง :</p>
                    <p class="p-col-2">${userData.height}<span>cm.</span></p>
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
      } else if (
        resultData.answer_E == 'case-1' &&
        resultData.answer_B == false &&
        resultData.answer_F == false &&
        resultData.answer_A == false &&
        resultData.answer_S == false
      ) {
        textResult = 'ความเสี่ยงต่ำ';
        const data = `
            <div class="card-result">
              <div class="content-center">
                <div class="show-img">
                  <img class="icon-result-good" src="../../../assets/images/warning.png">
                </div>
                <p class="result-header">อาการ และอาการของท่าน</p>
                <p class="result-header" style="margin-top: 15px">อยู่ในระดับเสี่ยงต่ำ</p>
                <p class="result-note">อาการ และอาการแสดงของท่านควรได้รับการวินิจฉัยและรับคำแนะนำจากแพทย์เพิ่มเติม</p>
                <div class="content-user">
                  <div class="hr-center">
                    <div class="hr-user"></div>
                  </div>
                  <p class="data-header">ข้อมูลผู้ทำแบบประเมิน</p>
                  <div class="d-row">
                    <p class="p-col-1">ชื่อ-นามสกุล :</p>
                    <p class="p-col-2">${
                      userData.firstname + ' ' + userData.lastname
                    }</p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">อายุ :</p>
                    <p class="p-col-2">${userData.age}<span>ปี</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">น้ำหนัก :</p>
                    <p class="p-col-2">${userData.weight}<span>kg.</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">ส่วนสูง :</p>
                    <p class="p-col-2">${userData.height}<span>cm.</span></p>
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
      } else if (
        resultData.answer_E == 'case-2' &&
        resultData.answer_B == false &&
        resultData.answer_F == false &&
        resultData.answer_A == false &&
        resultData.answer_S == false
      ) {
        textResult = 'ความเสี่ยงสูง';
        const data = `
            <div class="card-result">
              <div class="content-center">
                <div class="show-img">
                  <img class="icon-result-good" src="../../../assets/images/very-danger.png">
                </div>
                <p class="result-header">ท่านมีความเสี่ยง</p>
                <p class="result-header" style="margin-top: 15px">เป็นโรคหลอดเลือดสมองระดับสูง</p>
                <p class="result-note">เวลาที่แสดงอาการ ${
                  resultData.answer_T
                } น.</p>
                ${showTime}
                <div class="content-user">
                  <div class="hr-center">
                    <div class="hr-user"></div>
                  </div>
                  <p class="data-header">ข้อมูลผู้ทำแบบประเมิน</p>
                  <div class="d-row">
                    <p class="p-col-1">ชื่อ-นามสกุล :</p>
                    <p class="p-col-2">${
                      userData.firstname + ' ' + userData.lastname
                    }</p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">อายุ :</p>
                    <p class="p-col-2">${userData.age}<span>ปี</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">น้ำหนัก :</p>
                    <p class="p-col-2">${userData.weight}<span>kg.</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">ส่วนสูง :</p>
                    <p class="p-col-2">${userData.height}<span>cm.</span></p>
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
        textResult = 'ความเสี่ยงสูง';
        const data = `
            <div class="card-result">
              <div class="content-center">
                <div class="show-img">
                  <img class="icon-result-good" src="../../../assets/images/very-danger.png">
                </div>
                <p class="result-header">ท่านมีความเสี่ยง</p>
                <p class="result-header" style="margin-top: 15px">เป็นโรคหลอดเลือดสมองระดับสูง</p>
                <p class="result-note">เวลาที่แสดงอาการ ${
                  resultData.answer_T
                } น.</p>
                ${showTime}
                <div class="content-user">
                  <div class="hr-center">
                    <div class="hr-user"></div>
                  </div>
                  <p class="data-header">ข้อมูลผู้ทำแบบประเมิน</p>
                  <div class="d-row">
                    <p class="p-col-1">ชื่อ-นามสกุล :</p>
                    <p class="p-col-2">${
                      userData.firstname + ' ' + userData.lastname
                    }</p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">อายุ :</p>
                    <p class="p-col-2">${userData.age}<span>ปี</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">น้ำหนัก :</p>
                    <p class="p-col-2">${userData.weight}<span>kg.</span></p>
                  </div>
                  <div class="d-row">
                    <p class="p-col-1">ส่วนสูง :</p>
                    <p class="p-col-2">${userData.height}<span>cm.</span></p>
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
      }
    }
  }
}
customElements.define('card-result', CardResult);

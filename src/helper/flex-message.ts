import dayjs from './dayjs-helper';

export const NIHSSMessage = (data: any) => {
  return {
    to: [data.lineUserId],
    messages: [
      {
        type: 'flex',
        altText: 'แจ้งผลการประเมิน NIHSS',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'แปลผลคะแนน NIHSS',
                size: 'lg',
                align: 'center',
              },
              {
                type: 'separator',
                margin: 'lg',
              },
            ],
            margin: 'none',
          },
          hero: {
            type: 'image',
            url: data.statusIcon,
            size: '4xl',
            aspectRatio: '20:13',
            margin: 'none',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: data.statusResult,
                wrap: true,
                weight: 'bold',
                gravity: 'center',
                align: 'center',
                margin: 'none',
                size: 'lg',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ชื่อ-นามสกุล :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: data.firstname + ' ' + data.lastname,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'none',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'อายุ :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.age} ปี`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'น้ำหนัก :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.weight} kg.`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ส่วนสูง :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.height} cm.`,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'โรคประจำตัว :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: data.disease,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'separator',
                    margin: 'xxl',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'วันที่ทำแบบประเมิน :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 1,
                      },
                      {
                        type: 'text',
                        text: `${dayjs().format('DD-MM-YYYY')}`,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 1,
                        align: 'end',
                      },
                    ],
                    margin: 'none',
                  },
                ],
                margin: 'lg',
              },
            ],
          },
        },
      },
    ],
  };
};

export const GCSMessage = (data: any) => {
  return {
    to: [data.lineUserId],
    messages: [
      {
        type: 'flex',
        altText: 'แจ้งผลการประเมิน GCS',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'แปลผลคะแนน GCS',
                size: 'lg',
                align: 'center',
              },
              {
                type: 'separator',
                margin: 'lg',
              },
            ],
            margin: 'none',
          },
          hero: {
            type: 'image',
            url: data.statusIcon,
            size: '4xl',
            aspectRatio: '20:13',
            margin: 'none',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: data.statusResult,
                wrap: true,
                weight: 'bold',
                gravity: 'center',
                align: 'center',
                margin: 'none',
                size: 'lg',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ชื่อ-นามสกุล :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: data.firstname + ' ' + data.lastname,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'none',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'อายุ :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.age} ปี`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'น้ำหนัก :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.weight} kg.`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ส่วนสูง :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.height} cm.`,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'โรคประจำตัว :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: data.disease,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'separator',
                    margin: 'xxl',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'วันที่ทำแบบประเมิน :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 1,
                      },
                      {
                        type: 'text',
                        text: `${dayjs().format('DD-MM-YYYY')}`,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 1,
                        align: 'end',
                      },
                    ],
                    margin: 'none',
                  },
                ],
                margin: 'lg',
              },
            ],
          },
        },
      },
    ],
  };
};

export const BEFAST_Message_1 = (data: any) => {
  return {
    to: [data.lineUserId],
    messages: [
      {
        type: 'flex',
        altText: 'แจ้งผลการประเมิน BEFAST',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ผลการประเมินโรคหลอดเลือดสมอง',
                align: 'center',
                size: 'md',
                wrap: true,
                weight: 'bold',
              },
              {
                type: 'separator',
                margin: 'lg',
              },
            ],
            margin: 'lg',
          },
          hero: {
            type: 'image',
            url: 'https://www.img.in.th/images/d739ae8497f2ef2cda55294185f7a2d3.png',
            size: '4xl',
            aspectRatio: '20:13',
            margin: 'xs',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'ท่านไม่มีความเสี่ยง',
                wrap: true,
                weight: 'bold',
                gravity: 'center',
                size: 'lg',
                align: 'center',
              },
              {
                type: 'text',
                text: 'ที่จะเป็นโรคหลอดเลือดในสมอง',
                size: 'lg',
                weight: 'bold',
                align: 'center',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ชื่อ-นามสกุล :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: data.firstname + ' ' + data.lastname,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'none',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'อายุ :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.age} ปี`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'น้ำหนัก :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.weight} kg.`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ส่วนสูง :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.height} cm.`,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'horizontal',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'โรคประจำตัว :',
                    color: '#aaaaaa',
                    size: 'sm',
                    flex: 2,
                  },
                  {
                    type: 'text',
                    text: data.disease,
                    wrap: true,
                    size: 'sm',
                    color: '#666666',
                    flex: 3,
                  },
                ],
                margin: 'md',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'วันที่ทำแบบประเมิน :',
                    flex: 1,
                    color: '#aaaaaa',
                    size: 'sm',
                  },
                  {
                    type: 'text',
                    text: `${dayjs().format('DD-MM-YYYY')}`,
                    flex: 1,
                    color: '#666666',
                    align: 'end',
                    size: 'sm',
                  },
                ],
                spacing: 'sm',
              },
            ],
          },
        },
      },
    ],
  };
};

export const BEFAST_Message_2 = (data: any) => {
  return {
    to: [data.lineUserId],
    messages: [
      {
        type: 'flex',
        altText: 'แจ้งผลการประเมิน BEFAST',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ผลการประเมินโรคหลอดเลือดสมอง',
                align: 'center',
                size: 'md',
                wrap: true,
                weight: 'bold',
              },
              {
                type: 'separator',
                margin: 'lg',
              },
            ],
            margin: 'lg',
          },
          hero: {
            type: 'image',
            url: 'https://www.img.in.th/images/d276a65b454217171747a986f91dc4dc.png',
            size: '4xl',
            aspectRatio: '20:13',
            margin: 'xs',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'อยู่ในระดับเสี่ยงต่ำ',
                wrap: true,
                weight: 'bold',
                gravity: 'center',
                size: 'lg',
                align: 'center',
              },
              {
                type: 'text',
                text: 'อาการ และอาการแสดงของท่านควรได้รับการวินิจฉัยและรับคำแนะนำจากแพทย์เพิ่มเติม',
                size: 'md',
                weight: 'regular',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'xl',
                color: '#ffc40c',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ชื่อ-นามสกุล :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: data.firstname + ' ' + data.lastname,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'none',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'อายุ :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.age} ปี`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'น้ำหนัก :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.weight} kg.`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ส่วนสูง :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.height} cm.`,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'horizontal',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'โรคประจำตัว :',
                    color: '#aaaaaa',
                    size: 'sm',
                    flex: 2,
                  },
                  {
                    type: 'text',
                    text: data.disease,
                    wrap: true,
                    size: 'sm',
                    color: '#666666',
                    flex: 3,
                  },
                ],
                margin: 'md',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'วันที่ทำแบบประเมิน :',
                    flex: 1,
                    color: '#aaaaaa',
                    size: 'sm',
                  },
                  {
                    type: 'text',
                    text: `${dayjs().format('DD-MM-YYYY')}`,
                    flex: 1,
                    color: '#666666',
                    align: 'end',
                    size: 'sm',
                  },
                ],
                spacing: 'sm',
              },
            ],
          },
        },
      },
    ],
  };
};

export const BEFAST_Message_3 = (data: any) => {
  return {
    to: [data.lineUserId],
    messages: [
      {
        type: 'flex',
        altText: 'แจ้งผลการประเมิน BEFAST',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ผลการประเมินโรคหลอดเลือดสมอง',
                align: 'center',
                size: 'md',
                wrap: true,
                weight: 'bold',
              },
              {
                type: 'separator',
                margin: 'lg',
              },
            ],
            margin: 'lg',
          },
          hero: {
            type: 'image',
            url: 'https://www.img.in.th/images/5ad716b7f4589453b8fd52ada6ceddd8.png',
            size: '4xl',
            aspectRatio: '20:13',
            margin: 'xs',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'ท่านมีความเสี่ยง เป็นโรคหลอดเลือดสมองระดับสูง',
                wrap: true,
                weight: 'bold',
                gravity: 'center',
                size: 'lg',
                align: 'center',
              },
              {
                type: 'text',
                text: `เวลาที่แสดงอาการ ${data.time} น.`,
                size: 'sm',
                weight: 'bold',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'lg',
              },
              {
                type: 'text',
                text: 'เวลาแสดงอาการของท่านเกินเวลาที่สามารถรักษาแบบให้ยาได้',
                size: 'sm',
                weight: 'regular',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'lg',
                color: '#e03444',
              },
              {
                type: 'text',
                text: 'โปรดรีบนำส่งโรงพยาบาลใกล้บ้าน',
                size: 'sm',
                weight: 'regular',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'lg',
              },
              {
                type: 'text',
                size: 'sm',
                weight: 'regular',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'none',
                text: 'หรือติดต่อ 1669',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ชื่อ-นามสกุล :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: data.firstname + ' ' + data.lastname,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'none',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'อายุ :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.age} ปี`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'น้ำหนัก :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.weight} kg.`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ส่วนสูง :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.height} cm.`,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'horizontal',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'โรคประจำตัว :',
                    color: '#aaaaaa',
                    size: 'sm',
                    flex: 2,
                  },
                  {
                    type: 'text',
                    text: data.disease,
                    wrap: true,
                    size: 'sm',
                    color: '#666666',
                    flex: 3,
                  },
                ],
                margin: 'md',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'วันที่ทำแบบประเมิน :',
                    flex: 1,
                    color: '#aaaaaa',
                    size: 'sm',
                  },
                  {
                    type: 'text',
                    text: `${dayjs().format('DD-MM-YYYY')}`,
                    flex: 1,
                    color: '#666666',
                    align: 'end',
                    size: 'sm',
                  },
                ],
                spacing: 'sm',
              },
            ],
          },
        },
      },
    ],
  };
};

export const BEFAST_Message_4 = (data: any) => {
  return {
    to: [data.lineUserId],
    messages: [
      {
        type: 'flex',
        altText: 'แจ้งผลการประเมิน BEFAST',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ผลการประเมินโรคหลอดเลือดสมอง',
                align: 'center',
                size: 'md',
                wrap: true,
                weight: 'bold',
              },
              {
                type: 'separator',
                margin: 'lg',
              },
            ],
            margin: 'lg',
          },
          hero: {
            type: 'image',
            url: 'https://www.img.in.th/images/5ad716b7f4589453b8fd52ada6ceddd8.png',
            size: '4xl',
            aspectRatio: '20:13',
            margin: 'xs',
          },
          body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
              {
                type: 'text',
                text: 'ท่านมีความเสี่ยง เป็นโรคหลอดเลือดสมองระดับสูง',
                wrap: true,
                weight: 'bold',
                gravity: 'center',
                size: 'lg',
                align: 'center',
              },
              {
                type: 'text',
                text: `เวลาที่แสดงอาการ ${data.time} น.`,
                size: 'sm',
                weight: 'bold',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'lg',
              },
              {
                type: 'text',
                text: 'ท่านยังสามารถเข้ารับการรักษาได้ทันเวลา',
                size: 'sm',
                weight: 'regular',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'lg',
                color: '#e03444',
              },
              {
                type: 'text',
                text: 'โปรดรีบนำส่งโรงพยาบาลใกล้บ้าน',
                size: 'sm',
                weight: 'regular',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'lg',
              },
              {
                type: 'text',
                size: 'sm',
                weight: 'regular',
                align: 'center',
                gravity: 'center',
                wrap: true,
                margin: 'none',
                text: 'หรือติดต่อ 1669',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                spacing: 'sm',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ชื่อ-นามสกุล :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: data.firstname + ' ' + data.lastname,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'none',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'อายุ :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.age} ปี`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'น้ำหนัก :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.weight} kg.`,
                        wrap: true,
                        color: '#666666',
                        size: 'sm',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'ส่วนสูง :',
                        color: '#aaaaaa',
                        size: 'sm',
                        flex: 2,
                      },
                      {
                        type: 'text',
                        text: `${data.height} cm.`,
                        wrap: true,
                        size: 'sm',
                        color: '#666666',
                        flex: 3,
                      },
                    ],
                    margin: 'md',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'horizontal',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'โรคประจำตัว :',
                    color: '#aaaaaa',
                    size: 'sm',
                    flex: 2,
                  },
                  {
                    type: 'text',
                    text: data.disease,
                    wrap: true,
                    size: 'sm',
                    color: '#666666',
                    flex: 3,
                  },
                ],
                margin: 'md',
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'วันที่ทำแบบประเมิน :',
                    flex: 1,
                    color: '#aaaaaa',
                    size: 'sm',
                  },
                  {
                    type: 'text',
                    text: `${dayjs().format('DD-MM-YYYY')}`,
                    flex: 1,
                    color: '#666666',
                    align: 'end',
                    size: 'sm',
                  },
                ],
                spacing: 'sm',
              },
            ],
          },
        },
      },
    ],
  };
};

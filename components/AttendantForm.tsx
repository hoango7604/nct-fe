import React from 'react'
import get from 'lodash/get'
import {
  Form,
  Input,
  Button,
  Modal,
} from 'antd'

import {
  Headline,
  SubHeadline,
  ButtonLabel,
} from './base/Typo'
import Icon from './base/Icon'

const { confirm } = Modal

const AttendantForm = () => {
  const onSubmitAttendantForm = () => {
    confirm({
      title: 'Bạn chắc chắn thông tin đã chính xác?',
      icon: (
        <Icon
          iconName="warning"
          iconType="rounded"
          iconClass="color--vex-yellow"
        />
      ),
      content: 'Vui lòng kiểm tra lại toàn bộ thông tin đã nhập trước khi thực hiện điểm danh.',
      okText: 'Tiếp tục điểm danh',
      onOk: () => {},
      cancelText: 'Hủy',
    })
  }

  return (
    <>
      <ul className="description">
        <Headline className="note color--negative">
          Lưu ý:
        </Headline>

        <li className="note-item color--negative">
          <SubHeadline>
            Học sinh ngồi vào đúng số máy của mình
          </SubHeadline>
        </li>

        <li className="note-item color--negative">
          <SubHeadline>
            Nhập đầy đủ họ tên vào ô bên dưới và nhấn ĐIỂM DANH để thực hiện điểm danh vào lớp
          </SubHeadline>
        </li>

        <li className="note-item color--negative">
          <SubHeadline>
            Học sinh chỉ có thể điểm danh DUY NHẤT 1 LẦN. Không điểm danh hộ bạn bè mình.
          </SubHeadline>
        </li>
      </ul>

      <Form
        name="attendant-form"
        className="attendant-form"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        onFinish={null}
      >
        <Form.Item
          label="Máy"
          name="deviceName"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên thiết bị điểm danh',
            },
          ]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Họ tên"
          name="name"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập họ và tên học sinh',
            },
            {
              validator: (_, value: string = '') => {
                const regexName = /[\u00C0-\u1EF9a-zA-Z]{2,}( [\u00C0-\u1EF9a-zA-Z]{2,})+/g
                const regexMatch: string = get(value.match(regexName), '[0]')
                if (!value || (regexMatch && regexMatch.length === value.length)) {
                  return Promise.resolve()
                }

                return Promise.reject(new Error('Tên không đúng định dạng'))
              },
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button
            className="submit-button"
            style={{ marginTop: '16px' }}
            type="primary"
            onClick={onSubmitAttendantForm}
          >
            <ButtonLabel className="color--white">
              ĐIỂM DANH
            </ButtonLabel>
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AttendantForm

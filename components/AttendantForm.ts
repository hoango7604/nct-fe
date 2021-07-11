import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import {
  Form,
  Input,
  Button,
} from 'antd'
import {
  BigTitle01,
  Headline,
  SubHeadline,
  ButtonLabel,
} from './base/Typo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    text-align: center;
  }

  li > p.description {
    display: inline-flex;
  }
`

const AttendantForm = ({
  name,
}) => {
  return (
    <Container>
      <BigTitle01
        as="h1"
        className="title color--darkness">
        {`Điểm danh lớp ${name}`}
      </BigTitle01>

      <ul className="description">
        <Headline className="description color--darkness">
          Lưu ý
        </Headline>

        <li>
          <SubHeadline className="description color--darkness">
            Học sinh ngồi vào đúng số máy của mình
          </SubHeadline>
        </li>

        <li>
          <SubHeadline className="description color--darkness">
            Nhập đầy đủ họ tên vào ô bên dưới và nhấn ĐIỂM DANH để thực hiện điểm danh vào lớp
          </SubHeadline>
        </li>

        <li>
          <SubHeadline className="description color--darkness">
            Học sinh chỉ có thể điểm danh DUY NHẤT 1 LẦN. Không điểm danh hộ bạn bè mình.
          </SubHeadline>
        </li>
      </ul>

      <Form
        name="attendant-form"
        onFinish={null}
      >
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            <ButtonLabel className="color--white">
              ĐIỂM DANH
            </ButtonLabel>
          </Button>
        </Form.Item>
      </Form>
    </Container>
  )
}

export default AttendantForm

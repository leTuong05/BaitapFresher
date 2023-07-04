import { Button } from 'antd'
import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    border-top: 2px solid #efefef;
    border-bottom: 2px solid #efefef;
    padding: 15px 0;
    position: relative;
`
const Title = styled.h2`
margin: 0;
color: #324e94;
`
const Control = styled.div`
    display: flex;
    gap: 20px;
`
const Line = styled.div`
    width: 80px;
    height: 3px;
    background:linear-gradient(90deg, rgba(30,66,150,1) 0%, rgba(105,48,103,1) 31%, rgba(230,19,27,1) 100%);
    position: absolute;
    bottom: -1px;
    left: 0;
`
const Header = () => {
    return (
        <Wrapper>
            <Title>Danh sách khách hàng</Title>
            <Control>
                <Button style={{paddingLeft:'30px', paddingRight:'30px', border:'2px solid #324e94', fontWeight:700, color:'#324e94'}}>Nhập file khách hàng</Button>
                <Button style={{paddingLeft:'30px', paddingRight:'30px', border:'2px solid #324e94', fontWeight:700, color:'#324e94'}}>Xuất file</Button>
                <Button style={{paddingLeft:'30px', paddingRight:'30px', fontWeight:700, color:'white', background:'linear-gradient(90deg, rgba(30,66,150,1) 0%, rgba(105,48,103,1) 31%, rgba(230,19,27,1) 100%)'}}>Thêm khách hàng</Button>
            </Control>
            <Line></Line>
        </Wrapper>
    )
}

export default Header
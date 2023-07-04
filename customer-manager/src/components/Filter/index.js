import { AudioOutlined } from '@ant-design/icons';
import { Input, Select, Space } from 'antd';
import { styled } from 'styled-components';

const Wrapper = styled.div`
    display:flex
`
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value) => console.log(value);

const Filter = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <Wrapper>
            <Search
                placeholder="Nhập tên, mã, SĐT khách hàng"
                onSearch={onSearch}
                style={{
                    width: 'calc( 100%-250px )',
                    marginRight:'10px'
                }}
            />
            <Select
                defaultValue="Loại khách hàng"
                style={{
                    width: 250,
                    flex: '1'
                }}
                onChange={handleChange}
                options={[
                    {
                        value: 'jack',
                        label: 'Jack',
                    },
                    {
                        value: 'lucy',
                        label: 'Lucy',
                    },
                    {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                    },
                    {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                    },
                ]}
            />
        </Wrapper>


    )
}

export default Filter
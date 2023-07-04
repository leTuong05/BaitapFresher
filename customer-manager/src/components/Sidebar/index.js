import React, { useState } from 'react'
// import "antd/dist/antd.css";
import { Button, Tree } from 'antd';
import { styled } from 'styled-components';
import ActionSidebar from '../ActionSidebar';

const Wrapper = styled.div`
    width: 250px;
    /* box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;  */
    height: 100%;
    border-radius: 10px;
    border: 2px solid #ccc;
    padding: 10px;
`
const StyledTree = styled(Tree)`
    .ant-tree-title {
    /* Style for tree node title */
    
    color: #444c5d;
    font-weight: 700;
    
    
    }

    
    .ant-tree-node {
    /* Custom styles for tree nodes */
    }

    .ant-tree-node-content-wrapper {
    /* Custom styles for the content wrapper of tree nodes */
    position: relative;
    padding-right: 50px;
   
    }

    .ant-tree-node-selected .ant-tree-node-content-wrapper {
    /* Custom styles for the selected tree node */
    }
    .ant-tree-switcher-noop{
    display: none;
    }
`;
const treeData = [
    {
        title: 'Hải Phòng',
        key: 'hai-phong',
        children: [
            {
                title: 'Quận Hồng Bàng',
                key: 'quan-hong-bang',
                children: [
                    {
                        title: 'Phường Hạ Lý',
                        key: 'phuong-ha-ly',

                    },
                    {
                        title: 'Phường Hoàng Văn Thái',
                        key: 'phuong-hoang-van-thai',
                    },
                ],
            },
            {
                title: 'Quận Ngô Quyền',
                key: 'quan-ngo-quyen',
                children: [
                    {
                        title: 'Phường Cầu Đất',
                        key: 'phuong-cau-dat',
                        children: [
                            {
                                title: 'Thôn 1',
                                key: 'thon-1'
                            },
                            {
                                title: 'Thôn 2',
                                key: 'thon-2'
                            },
                        ]
                    },
                    {
                        title: 'Phường Hạ Đình',
                        key: 'phuong-ha-dinh',
                    },
                ],
            },
        ],
    },
];

export default function Sidebar() {
    const handleSelect = (selectedKeys, info) => {
        console.log('Selected Keys:', selectedKeys.node.pos);
        console.log('Info:', info.node.pos);
        // Add your custom logic here based on the selectedKeys or info
    };
    const [hoveredLevel, setHoveredLevel] = useState();
    const [showButton, setShowButton] = useState(false);

    const handleMouseEnter = (selectedKeys, info) => {
        const str = selectedKeys.node.pos;
        const level = str.split("-").length;
        console.log("cái này level: ", level - 1);
        console.log(selectedKeys);
        setHoveredLevel(level - 1)
    };

    const handleMouseLeave = () => {
        setHoveredLevel('');
        console.log('Hovered Level: None');
    };

    const titleRender = (nodeProps) => {
        const { title, pos, key, isLeaf } = nodeProps;

        if (hoveredLevel === 3 && !isLeaf) {
            return (
                <div className="ant-tree-title">
                    <p>{title}</p>
                    <ActionSidebar className='hover'  lessAction />
                </div>
            );
        }
        else if (hoveredLevel === 4 && !isLeaf) {
            return (
                <div className="ant-tree-title">
                    <p>{title}</p>
                    <ActionSidebar className='hover' fullAction />
                </div>
            );
        }
        return title;
    }
    return (
        <Wrapper>
            <StyledTree
                treeData={treeData}
                //onSelect={handleSelect}
                // titleRender={titleRender}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                titleRender={titleRender}
            />

        </Wrapper>
    );
}
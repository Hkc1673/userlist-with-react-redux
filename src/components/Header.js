import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import "./Header.css";
import 'antd/dist/antd.css';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
    ],
});

function Header() {
    return (
        <div className="header">
            <div className="icons-list">
                <IconFont type="icon-javascript" style={{ fontSize: '36px', color: '#fff' }} />
                <span>React-Redux Project</span>
            </div>
            <div className="header-title">
                <span>USERS LIST</span>
            </div>
        </div>
    )
}

export default Header
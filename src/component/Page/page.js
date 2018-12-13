import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './less/page.less'

export default class Page extends Component {
    constructor(props){
        super(props);
    }

    handle(n){
        this.props.onCurrentChange(n);
    }

    render() {
        const {currentPage,totalCount,totalPage} = this.props;
        return (
            <div>
                {totalCount>0?
                    <div className="pagination">
                        {currentPage == 1?
                            <span className="turn disable">上一页</span>
                            :
                            <span className="turn" onClick={()=>{this.handle(currentPage-1)}}>上一页</span>
                        }
                        <div className="page-num">
                            <i>{currentPage}</i>/ {totalPage}
                        </div>
                        {currentPage == totalPage?
                            <span className="turn disable">下一页</span>
                            :
                            <span className="turn" onClick={()=>{this.handle(currentPage+1)}}>下一页</span>
                        }
                        <div className="total">共<i>{totalCount}</i>条</div>
                    </div>
                    :
                    null
                }
            </div>

        )
    }
}

Page.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    onCurrentChange: PropTypes.func
}
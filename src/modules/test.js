import React, {Component} from 'react';
import '../css/App.css';

class Test extends Component {
    render() {
        const style = {
            color: '#ccc'
        }
        return (
            <div>
                <h1 style={{color: 'red'}}>It Is Me! React!</h1>
                <h2 style={style}>CSS Style </h2>
                <h3 className='cssTest'>Link Css </h3>
            </div>
        );
    }
}


/**
 * 创建组件的一种方式，ES5原生的JS实现React组件（已被废除）
 * 构建一个"类"，接受一个对象为参数；对象必须有render方法
 * render会返回一个组件实例；这是一个有状态的组件，可以访问组件的生命周期方法
 * 缺点是：会自动绑定函数方法，增加性能问题；mixins不够直观
 *
 * @function  React.createClass
 * @param  Object
 * @returns  Component
 *
 * @date     2017/11/24
 * @author   LaLaCheng
 */
// const firstES5Component = React.createClass({
//
//     getDefaultProp: function () {
//         return {open: false}
//     },
//     getInitialState: function () {
//         return {open: this.props.open}
//     },
//     handleClick: function () {
//         this.setState({
//             open: !this.state.open
//         })
//     },
//     render: function () {
//         var open = this.state.open
//         return (
//             <label onclick={this.handleClick.bind(this)}>
//                 <input type="checkbox" checked={open}/>Woman
//             </label>
//         );
//     }
// });

/**
 * ES6写法的创建组件，有状态的组件，
 * 取代React.createClasss
 *
 * @function React.Componentss
 * @param Object
 * @returns render
 *
 * @date     2017/11/24
 * @author   LaLaCheng
 */
class ES6Component extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open,
            close: this.props.close,
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.increment = this.increment.bind(this);
    }

    /**
     * Click事件点击处理
     *
     * 内部调用setState函数更新state，传入参数为对象。
     * 重复的setState调用，传入对象为参数会以最后以此为准
     * @function handleClick
     * @date     2017/11/24
     * @author   LaLaCheng
     */
    handleClick(event) {
        this.setState({
            open: !this.state.open
        })
    }

    /**
     * 更新state的count
     *
     * 内部调用setState函数更新state，传入参数为函数。
     * 每一个setState都会加入队列，按照函数的顺序依次调用
     * @function increment
     * @date     2017/11/24
     * @author   LaLaCheng
     */
    increment() {
        // prevState是上一个state状态，
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        let open = this.state.open
        const isGoodWord = true
        const goodWord = <strong>is good</strong>
        const badword = <strong>is bad</strong>
        return (
            <div>
                <label onClick={this.handleClick}>
                    <input type="checkbox" checked={open}/> Man
                </label>
                {/*大括号中可以放置任何js代码，包括注释，JSX表达式*/}
                <h3>ll:{this.state.close}</h3>
                {/*JSX表达式也可以自由赋给变量，作为参数传递，返回值等。*/}
                <h2>React {isGoodWord ? goodWord : badword}</h2>
            </div>
            // 经过babel编译后的JSX语法，包含三要素：标签名，属性，子元素
            // React.createElement(
            //     "div",
            //     null,
            //     React.createElement(
            //         "h1",
            //         {className:'title'},
            //         'React is Good'
            //     )
            // )
        )
    }
}

// 初始化props
ES6Component.defaultProps = {
    open: false,
    close: 'ss'
}


/**
 * 无状态组件写法，只负责展示的纯组件
 *
 * 输入输出细节全有props决定。
 * 大型项目会搭配高阶组件 实现，通过Redux托管状态
 *
 * @function NoStatusComponent
 * @param    props
 * @returns
 *
 * @date     2017/11/24
 * @author   LaLaCheng
 */
const NoStatusComponent = (props) => (
    <li onclick={props.onClick}>
        {props.text}
    </li>
)

/**
 * 这种组件写法比较专注页面展示。
 *
 * 作为子组件，接受父组件传递过来的props。
 *
 * @function ComponentView
 *
 * @date     2017/11/24
 * @author   LaLaCheng
 */
class ComponentView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <ul>{this.props.comments.map(renderComment)}</ul>
    }

    renderComment({body, author}) {
        return <li>{body}-{author}</li>
    }
}

/**
 * 这种组件写法比较专注数据交互，类似controller
 *
 * ajax请求获取的数据更新state，render中将state传递给子组件的props
 *
 * @function ComponentController
 *
 * @date     2017/11/24
 * @author   LaLaCheng
 */
class ComponentController extends React.Component {
    constructor() {
        super();
        this.state = {comments: []}
    }

    componentDidMount() {
        $.ajax({
            url: '',
            dataType: 'json',
            success: function (comments) {
                this.setState({comments: comments})
            }.bind(this)
        });
    }

    render() {
        return <ComponentView comments={this.state.comments}/>
    }
}


export default ES6Component;
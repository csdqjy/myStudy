import React from 'react';
import "./index.css"

class jzq extends React.Component {
	state = {
		list: [],
		xList: [],
		oList: [],
		num: 0,
	};
	click() {
		this.setState({
			a: 2
		});
	};
	renderSquare(index) {
		if (this.state.list.includes(index)) {
			return
		};
		if (fn(this.state.xList)) {
			alert('X获胜');
			return

		} else if (fn(this.state.oList)) {
			alert('O获胜');
			return
		}

		let list = [...this.state.list];
		list.push(index);
		if (this.state.num % 2 === 0) {
			let xList = [...this.state.xList];
			xList.push(index);
			this.setState({
				list: list,
				xList: xList,
				num: this.state.num + 1,
			})
		} else {
			let oList = [...this.state.oList];
			oList.push(index);
			this.setState({
				list: list,
				oList: oList,
				num: this.state.num + 1,
			})
		};

		function fn(arr) {
			return arr.includes(0) && arr.includes(1) && arr.includes(2) ||
				arr.includes(0) && arr.includes(3) && arr.includes(6) ||
				arr.includes(3) && arr.includes(4) && arr.includes(5) ||
				arr.includes(1) && arr.includes(4) && arr.includes(7) ||
				arr.includes(6) && arr.includes(7) && arr.includes(8) ||
				arr.includes(2) && arr.includes(5) && arr.includes(8) ||
				arr.includes(0) && arr.includes(4) && arr.includes(8) ||
				arr.includes(2) && arr.includes(4) && arr.includes(6)
		};
	};
	ai() {
		let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(item => {
			return !this.state.list.includes(item)
		});
		if (fn_1(this.state.xList)) {
			if (Math.floor((Math.random() * 2)) === 1) {
				arr.forEach(item => {
					let a = [...this.state.xList]
					a.push(item);
					if (fn(a)) {
						this.renderSquare(item)
					}
				})
			}
		}
		function fn_1(ary) {
			return arr.includes(0) && arr.includes(1) || arr.includes(1) && arr.includes(2) || arr.includes(0) && arr.includes(2) ||
				arr.includes(0) && arr.includes(3) || arr.includes(0) && arr.includes(6) || arr.includes(3) && arr.includes(6) ||
				arr.includes(3) && arr.includes(4) || arr.includes(3) && arr.includes(5) || arr.includes(4) && arr.includes(5) ||
				arr.includes(1) && arr.includes(4) || arr.includes(1) && arr.includes(7) || arr.includes(4) && arr.includes(7) ||
				arr.includes(6) && arr.includes(7) || arr.includes(6) && arr.includes(8) || arr.includes(7) && arr.includes(8) ||
				arr.includes(2) && arr.includes(5) || arr.includes(2) && arr.includes(8) || arr.includes(5) && arr.includes(8) ||
				arr.includes(0) && arr.includes(4) || arr.includes(0) && arr.includes(8) || arr.includes(4) && arr.includes(8) ||
				arr.includes(2) && arr.includes(4) || arr.includes(2) && arr.includes(6) || arr.includes(4) && arr.includes(6)
		};
		function fn(arr) {
			return arr.includes(0) && arr.includes(1) && arr.includes(2) ||
				arr.includes(0) && arr.includes(3) && arr.includes(6) ||
				arr.includes(3) && arr.includes(4) && arr.includes(5) ||
				arr.includes(1) && arr.includes(4) && arr.includes(7) ||
				arr.includes(6) && arr.includes(7) && arr.includes(8) ||
				arr.includes(2) && arr.includes(5) && arr.includes(8) ||
				arr.includes(0) && arr.includes(4) && arr.includes(8) ||
				arr.includes(2) && arr.includes(4) && arr.includes(6)
		};
		this.renderSquare(arr[Math.floor((Math.random() * arr.length))])
	};
	click(index) {
		this.renderSquare(index);
		setTimeout(() => {
			this.ai();
		}, 1000)
	};
	clear() {
		this.setState({
			list: [],
			xList: [],
			oList: [],
			num: 0,
		})
	}
	render() {
		let state = this.state;
		// const status = 'Next player: X';
		return (
			<div>
				<div className="box">
					{new Array(9).fill().map((item, index) => {
						return <p className="p" onClick={() => {
							this.click(index)
						}} key={index}>{state.xList.includes(index) ? "X" : null || state.oList.includes(index) ? "O" : null}</p>
					})}
				</div>
				<button onClick={() => {
					this.clear()
				}}>清空</button>
			</div>
		);
	}
}

export default jzq;

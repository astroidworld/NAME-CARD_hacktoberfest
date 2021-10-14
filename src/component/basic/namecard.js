import React, { useState } from "react";
import "./style.css";
import List from "./listApi.js";
import ListCard from "./listCard";
import list from "./AtoZ";
import Btn from "./button";
const Namecard1 = () => {
	// eslint-disable-next-line
	const [listdata, setListdata] = React.useState(List);

	return (
		<>
			<div className="container">
				<header>
					<h1>
						<div>NAME-CARD</div>
					</h1>
				</header>
				<main>
					<div className="mainheading">
						<h1>
							<div> Successful Contributors List</div>
						</h1>
						<div className="divbtn">
							<h2 className="text-warning">Names Starts with :- </h2>
							{list.map((value, index) => {
								return (
									<>
										<Btn
											l={value}
											key={index}
											func={() => {
												let array = [];
												for (const i of List) {
													if (i.firstName[0] === value) {
														array.push(i);
													}
												}
												setListdata(array);
											}}
										/>
									</>
								);
							})}
							<Btn
								l="All"
								func={() => {
									setListdata(List);
								}}
							></Btn>
						</div>
					</div>
					<div className="container2">
						<ListCard listdata={listdata} />
					</div>
				</main>
			</div>
		</>
	);
};

export default Namecard1;

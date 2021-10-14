import React from "react";
export default function (params) {
	return (
		<>
			{console.log(params.l)}
			<button
				type="button"
				className="btn btn-outline-warning"
				onClick={params.func}
			>
				{params.l}
			</button>
		</>
	);
}

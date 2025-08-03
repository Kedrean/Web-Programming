import React, { useState } from 'react';

export default function GradeCalc() {
	const [quiz, setQuiz] = useState('');
	const [lab, setLab] = useState('');
	const [finalExam, setFinalExam] = useState('');

	const [ovaGrade, setOvaGrade] = useState(null);
	const [fourPtGrade, setFourPtGrade] = useState(null);

	const calculateGrades = () => {
		const q = parseFloat(quiz);
		const l = parseFloat(lab);
		const f = parseFloat(finalExam);

		if (isNaN(q) || isNaN(l) || isNaN(f)) {
			alert('Please enter valid numeric scores.');
			return;
		}

		const grade = (q * 0.3) + (l * 0.3) + (f * 0.4);

		const formattedGrade = grade.toFixed(2);
		const fourPoint = mapToFourPointScale(grade);
		const formattedFourPoint = fourPoint.toFixed(2);

		setOvaGrade(formattedGrade);
		setFourPtGrade(formattedFourPoint);
	};

	const mapToFourPointScale = (grade) => {
		if (grade < 74.51) return 0.00;
		else if (grade <= 76.5) return 1.00;
		else if (grade <= 78.5) return 1.25;
		else if (grade <= 80.5) return 1.50;
		else if (grade <= 82.5) return 1.75;
		else if (grade <= 84.5) return 2.00;
		else if (grade <= 86.5) return 2.25;
		else if (grade <= 88.5) return 2.50;
		else if (grade <= 90.5) return 2.75;
		else if (grade <= 92.5) return 3.00;
		else if (grade <= 94.5) return 3.25;
		else if (grade <= 96.5) return 3.50;
		else if (grade <= 98.5) return 3.75;
		else return 4.00;
	};

	return (
		<div className = "container">
			<h1 className = "title"> 
				Grade Calculator
			</h1>
			<div className="form">
				<label htmlFor = "quiz"> Quiz Score </label>
				<input
					id = "quiz"
					type = "number"
					placeholder = "90"
					value = {quiz}
					onChange = {(e) => setQuiz(e.target.value)}
					className = "input"
				/>

				<label htmlFor="lab"> Lab Score </label>
				<input
					id="lab"
					type = "number"
					placeholder = "90"
					value = {lab}
					onChange = {(e) => setLab(e.target.value)}
					className = "input"
				/>

				<label htmlFor="final"> Final Exam Score </label>
				<input
					id="final"
					type = "number"
					placeholder = "90"
					value = {finalExam}
					onChange = {(e) => setFinalExam(e.target.value)}
					className = "input"
				/>

				<button onClick = {calculateGrades} className = "button">
					Calculate
				</button>
			</div>

			{ovaGrade && (
				<div className = "result">
					<p> Overall Grade: <strong> {ovaGrade} </strong> </p>
					<p> 4-Point Grade: <strong> {fourPtGrade} </strong> </p>
				</div>
			)}
		</div>
	);
}
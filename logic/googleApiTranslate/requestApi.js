const fetch = require('node-fetch')
const { transUrl, transBody } = require('./urlParse')

const getTrans = (text) => {

	fetch(transUrl().toString(), {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=UTF-8",
			"x-goog-batchexecute-bgr": "[\";a3W4dTjQAAYI1eB4KNVfFS2CSBTKaNgmACkAIwj8RjBo2dwAtgfLpdstX6XevmpFve8GbRW-JJ5mRNwjqf1vcTbYLB8AAABnTwAAAAJ1AQcXALgp0dMZHVkHXTiJGr7Uw4QqVq3rG1vc8XRmHAioabjfwIzqE35YCYmjfCohO9ulhInvFFAW2HoTxuFYRaAlOi-W-Q_KaQaD_X1zD8HLS5zJlYFlE6uEGjbwJ8V9VaWZVSE3j3LucoYb0an-mGDmq7DXdlPFFVFn8pc7upCTERZWOmbNMQXAdD_JlFe9pWYQBwk7Pfr0nX_dwGsCqpzQD_j0ycDKBhzruO-cy2OSpPLcGSS7zxEUvBp4hAJuIlX-J5Nx2RaJVxN86yOnwfqHcZVvd9mDjAfZL_DUWXqk2yO7YMMp4jCql4ssVqDWC_HPbjI0wBylfXhaaa7Xux7kyN3Ife47ZkMvystkFrHh2yYtowB1zdD4ZCNrWWckPHWk8Qd9I-AQGdMYueTFL_TFV47yEVX-rW8YQgv3ZRD9XqX0d24kzY0nSGXm4TQnVJbRCB3rKLoxJRGZsUhRlFdeTwMYvDkwxFZPt--1nXemDKenijqOH2cMRHbUdOx7FcLkxcMXihNacOK6vBgG11lapNA77Lc7URY_NxIxVAidKRfsWIuUgu2VlrXr5wddIdxQQtOjTQ3n0JBhRoVN82_f_grCwopLYigxxGNLonpQacM8DY6mnR4-pUzEQEHeGUIPklCp5WUwVnguppmIAK00hKXaYHzkGmceeWDRHJETgb0VmhQlqB3RXOcChvQ78P3Y-Xm52X4lvM4nLS2EA-X-fmyRKh6jF09hjX1TSFQ5QwsHG0c7bPGXsP1YvSjU-uzz3UVCNRBt-005xN3fDV3FqoYeYfK5MYIJkN_kLWrzhLulYnLCw87Rv0wEIATBmsNElbLWoWngXp0R66HinT3eMrSU8FRtm2VKKly23OiOMdtlMVb_HfPX2BkkJVPRjJ8Gj7JtKmkdSWOkkZuBbswb8wsVWim5a9DZtXHKHGP3uw_hv5th6EURDZp7piicYP6_Hq7_uoQzDiNBrZP5ypJnlT_nfK7yLyE9GrSz1QIRaW2pNpoZsAVQz8IcKVlWixsHtt4yDIRg2wV8iQCNlb_PLdY2VOMPzsZQJtFJvxsrQ3R-sa_Cko9N9Bk7Cg\",null,null,123,null,null,null,0,\"2\"]",
			"x-same-domain": "1"
		},
		referrer: "https://translate.google.com/",
		referrerPolicy: "origin",
		body: transBody(text),
		method: "POST",
	})
		.then(res => res.ok ? res.text() : console.error(res))
		.then(data => console.log(data))
}

getTrans('')



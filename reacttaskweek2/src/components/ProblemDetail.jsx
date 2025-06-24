// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const ProblemDetail = () => {
//   const { id } = useParams()
//   const [problem, setProblem] = useState(null)
//   const [isPending, setIsPending] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetch(`http://localhost:5000/problems/${id}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw Error('Could not fetch the problem')
//         }
//         return res.json()
//       })
//       .then((data) => {
//         setProblem(data)
//         setIsPending(false)
//         setError(null)
//       })
//       .catch((err) => {
//         setIsPending(false)
//         setError(err.message)
//       })
//   }, [id])

//   if (isPending) return <h2>Loading...</h2>
//   if (error) return <h2>{error}</h2>
//   if (!problem) return <h2>Problem not found</h2>

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{problem.title}</h2>
//       <p>{problem.description}</p>
//       <p>{problem.test_cases}</p>
//       <p>{problem.output}</p>
//       <p>{problem.submit_test_cases}</p>
//       <p>{problem.submit_output}</p>
//       <p>{problem.status}</p>
//     </div>
//   )
// }

// export default ProblemDetail

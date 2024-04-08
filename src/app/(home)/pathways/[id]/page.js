// "use client"
// import Box from "@mui/material/Box";
// import {Breadcrumbs} from "@mui/material";

// import PathwayBreadcrumbs from "@/components/Buttons/PathwayBreadcrumbs";
// import {generateClient} from "aws-amplify/data";
// import {useEffect, useState} from "react";

// export default function Pathway({params}) {
//     const [pathway, setPathway] = useState(null);
//     const client = generateClient()

//     useEffect(() => {
//         client.models.Pathway.get({
//             id: params.id
//         }).then(({data, errors}) => {
//             errors ? console.error(errors) :
//                 setPathway(data)
//         })
//     }, [])

//     console.log(pathway)
//     return (
//         <Box>
//             <PathwayBreadcrumbs
//                 pathwayName={pathway.name}
//             />
//             <Box>
//                 {
//                     pathway.semesters.map((semester, index) => {
//                         return (
//                             <div>{semester.name}</div>
//                         )
//                     })
//                 }
//             </Box>
//         </Box>
//     )
// }
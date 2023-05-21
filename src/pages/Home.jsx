import { useState } from "react"
import { Box } from '@mui/material'
import { HeroBanner } from "../components/HeroBaner"
import { SearchExercises } from "../components/SearchExercises"
import { Exercises } from "../components/Exercises"

export const Home = () => {
   const [bodyPart, setBodyPart] = useState([]);
   const [exercises, setExercises] = useState([]);

   return (
      <Box>
         <HeroBanner />
         <SearchExercises
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            setExercises={setExercises}
         />
         <Exercises
            exercises={exercises}
            setExercises={setExercises}
            bodyPart={bodyPart}
         />
      </Box >
   )
}

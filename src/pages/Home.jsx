import { useState } from "react"
import { Box } from '@mui/material'
import { HeroBanner } from "../components/HeroBaner"
import { SearchExercises } from "../components/SearchExercises"
import { Exercises } from "../components/Exercises"

export const Home = () => {
   return (
      <Box>
         <HeroBanner />
         <SearchExercises />
         <Exercises />
      </Box >
   )
}

import { Skeleton, SkeletonText } from '@chakra-ui/react'

function LoadingSkeleton({ lines, loaded }) {
  return (
    <Skeleton isLoaded={!loaded}>
      <SkeletonText mt='4' spacing='4' height='50px' noOfLines={lines}
        startColor='#555' endColor='#606060' />
    </Skeleton>
  )
}

export default LoadingSkeleton
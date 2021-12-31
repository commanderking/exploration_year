import { Box, Heading } from "@chakra-ui/react";
import { WeeklyMediaOpenGraph } from "types/media";
import PrimaryLink from "components/PrimaryLink";

type Props = {
  weeklyMedia: WeeklyMediaOpenGraph[];
};

const WeeklyMedia = ({ weeklyMedia }: Props) => {
  console.log("weeklyMedia", weeklyMedia);
  return (
    <Box>
      {weeklyMedia.map((weeklyMedia) => {
        return (
          <Box key={weeklyMedia.week}>
            <Heading fontSize="xl">Week of {weeklyMedia.week}</Heading>
            <Box mt={4}>
              {weeklyMedia.media.map((medium, index) => {
                return (
                  medium.ogTitle && (
                    <Box key={medium.ogTitle || index}>
                      <PrimaryLink isExternal href={medium.ogUrl}>
                        {medium.ogTitle}
                      </PrimaryLink>
                    </Box>
                  )
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default WeeklyMedia;

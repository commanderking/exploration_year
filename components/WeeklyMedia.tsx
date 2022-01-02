import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { WeeklyMediaOpenGraph } from "types/media";
import PrimaryLink from "components/PrimaryLink";
import { Divider, Grid, GridItem } from "@chakra-ui/react";

type Props = {
  weeklyMedia: WeeklyMediaOpenGraph[];
};

const WeeklyMedia = ({ weeklyMedia }: Props) => {
  console.log({ weeklyMedia });
  return (
    <Box>
      <Heading>Weekly Media</Heading>
      <Text>A list of the media that I'm consuming each week... </Text>
      {weeklyMedia.map((weeklyMedia) => {
        return (
          <Box key={weeklyMedia.week}>
            <Box mt={8}>
              <Heading fontSize="xl">Week of {weeklyMedia.week}</Heading>
              {!weeklyMedia.media.length && (
                <Text mt={8}>Nothing for this week yet!</Text>
              )}
              {Boolean(weeklyMedia.media.length) &&
                weeklyMedia.media.map((medium, index) => {
                  return (
                    medium.ogTitle && (
                      <Box
                        key={medium.ogTitle || index}
                        borderRadius={8}
                        mt={4}
                        maxWidth={500}
                        p={4}
                        border="1px solid lightgray"
                      >
                        <Image src={medium.ogImage.url} />
                        <Text>{medium.ogSiteName}</Text>
                        <Box mt={4}>
                          <PrimaryLink isExternal href={medium.ogUrl}>
                            {medium.ogTitle}
                          </PrimaryLink>
                        </Box>
                        <Text>{medium.ogDescription}</Text>
                      </Box>
                    )
                  );
                })}
            </Box>
            <Divider mt={8} />
          </Box>
        );
      })}
    </Box>
  );
};

export default WeeklyMedia;

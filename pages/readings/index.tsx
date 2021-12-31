import WeeklyMedia from "components/WeeklyMedia";
import ogs from "open-graph-scraper";
import weeklyMedia from "media/weekly.json";
import { Media, WeeklyMediaOpenGraph } from "types/media";

type Props = {
  weeklyMedia: WeeklyMediaOpenGraph[];
};

const Media = ({ weeklyMedia }: Props) => {
  return <WeeklyMedia weeklyMedia={weeklyMedia} />;
};

export default Media;

export const getStaticProps = async () => {
  const getOpenGraphInfo = async (reading: Media) => {
    const { url } = reading;
    return await ogs({ url });
  };

  const formattedWeeklyMedia = await Promise.all(
    weeklyMedia.map(async (weeklymedium) => {
      const openGraphMedia = await Promise.all(
        weeklymedium.media.map(async (medium) => {
          // @ts-ignore - Type shoudl be BOOK or ARTICLE, but is being cast to string
          const readingOpenGraph = await getOpenGraphInfo(medium);

          // TODO: Handle success case only
          //   if (data.result.success) {
          //     console.log("result", data.result);
          //   }
          return readingOpenGraph.result;
        })
      );

      return {
        ...weeklymedium,
        media: openGraphMedia,
      };
    })
  );

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      weeklyMedia: formattedWeeklyMedia || [],
    },
  };
};

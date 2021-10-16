import convertArrayToStrWithSpace from "../../utils/convertArrayToStrWithSpace";
import getDuration from "../../utils/getDuration";
import getEndTime from "../../utils/getEndTime";
import getStartTime from "../../utils/getStartTime";
import semanticCountOfStops from "../../utils/semanticCountOfStops";

const useSegment = (segment: segmentsType[0]) => {
  const startTime = getStartTime(segment.date);
  const endTime = getEndTime(
    segment.date,
    segment.duration
  );
  const parsedDuration = getDuration(segment.duration);
  const stops = convertArrayToStrWithSpace(segment.stops);
  const countOfStops = semanticCountOfStops(segment.stops.length)

  return {
    origin: segment.origin,
    destination: segment.destination,
    startTime,
    endTime,
    parsedDuration,
    countOfStops,
    stops
  }
};

export default useSegment;

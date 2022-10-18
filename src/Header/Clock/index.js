import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

const Clock = () => {
    const {
        dateToRender,
        timeToRender,
    } = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {dateToRender}, {timeToRender}
        </StyledClock>
    )
};

export default Clock; 
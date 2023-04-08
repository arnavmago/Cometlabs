import {ReadOnly} from './types';

const ArenaSchedule = ({readOnly}: ReadOnly) => {

    if (readOnly) {
        return (
            <div>Schedule here</div>
        )
    }

    return (
        <div>Schedule here</div>
    )
}

export default ArenaSchedule 
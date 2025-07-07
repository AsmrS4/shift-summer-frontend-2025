import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import './LinearProgress.scss';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#40bf7f',
        ...theme.applyStyles('dark', {
            backgroundColor: '#40bf7f',
        }),
    },
}));

const LinearProgressBar = () => {
    //TODO:вынести счетчик прогресса в store
    return (
        <div className='progress-bar'>
            <label className='progress-bar__label'>
                <p>Шаг {1} из 7</p>
            </label>
            <BorderLinearProgress
                className='progress-bar__progress'
                variant='determinate'
                value={14}
            />
        </div>
    );
};

export default LinearProgressBar;

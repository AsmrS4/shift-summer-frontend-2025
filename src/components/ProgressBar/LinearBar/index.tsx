import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import './LinearProgress.scss';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect, useState } from 'react';

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
    const { step, threshold } = useAppSelector((state) => state.progressReducer);
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(step);
    }, [step]);
    return (
        <div className='progress-bar'>
            <label className='progress-bar__label'>
                <p>
                    Шаг {value} из {threshold}
                </p>
            </label>
            <BorderLinearProgress
                className='progress-bar__progress'
                variant='determinate'
                value={14 * step + 1}
            />
        </div>
    );
};

export default LinearProgressBar;

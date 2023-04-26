import {
  handleCloseGlobalLoading,
  handleOpenGlobalLoading,
} from '@store/slices/statusSlice';
import { useAppDispatch } from '@store/store';
import React, { useEffect, useState } from 'react';

interface ComponentProps {
  handleChangeLoading: (state: boolean) => void;
}

const withLoading = <P extends ComponentProps>(
  OriginalComponent: React.ComponentType<P>
): React.FC<P> => {
  const WithLoading: React.FC<P> = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const handleChangeLoading = (state: boolean) => {
      setIsLoading(state);
    };
    useEffect(() => {
      if (isLoading) {
        dispatch(handleOpenGlobalLoading());
      } else {
        dispatch(handleCloseGlobalLoading());
      }
    }, [isLoading]);
    return (
      <OriginalComponent {...props} handleChangeLoading={handleChangeLoading} />
    );
  };
  return WithLoading;
};

export default withLoading;

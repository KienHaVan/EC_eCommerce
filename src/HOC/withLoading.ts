// import {
//   handleCloseGlobalLoading,
//   handleOpenGlobalLoading,
// } from '@store/slices/statusSlice';
// import { useAppDispatch } from '@store/store';
// import { useEffect } from 'react';

// export const withLoading = (
//   Component: React.ComponentType<any>,
//   isLoading: boolean
// ): React.FC => {
//   const WrappedComponent: React.FC = (props) => {
//     const dispatch = useAppDispatch();
//     useEffect(() => {
//       if (isLoading) {
//         dispatch(handleOpenGlobalLoading());
//       } else {
//         dispatch(handleCloseGlobalLoading());
//       }
//     }, [isLoading]);
//     return <Component {...props} />;
//   };
//   return WrappedComponent;
// };

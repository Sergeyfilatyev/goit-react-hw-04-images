import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.css';
export function Loader() {
  return (
    <div className={s.spinner}>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.8"
        width="60"
        visible={true}
      />
    </div>
  );
}

import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.css';
export function Loader() {
  return (
    <div className={s.spinner}>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.8"
        width="60"
        visible={true}
      />
    </div>
  );
}

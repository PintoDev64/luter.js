import { useEffect, useState } from 'react';
import Checkbox from './library/components/checkbox';
import Progress from './library/components/progress';
import Switch from './library/components/switch';
import Toasts from './library/components/toast';
import Toast from './library/components/toast/Toast';
import Toggle from './library/components/toggle';
import useToast from './library/hooks/useToast';

export default function App() {
  const { addToast } = useToast();
  const [PercentExample, setPercentExample] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentExample((prevPercent) => {
        const newValue = prevPercent + 1;
        return newValue > 100 ? 0 : newValue; // Resetea a 0 cuando llega a 100
      });
    }, 100);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  return (
    <>
      <Toggle borderRadius="round" image="https://yt3.ggpht.com/-tIM3_1Ehi92NTNIBJzvD2ySWYJowagr7ar8D3oupVSSNNsL8RRYvAm21tLXq2zIUeHlsCN8pw=s88-c-k-c0x00ffffff-no-rj"/>
      <Switch />
      <Checkbox />
      <Toasts Component={Toast} />
      <button onClick={() => addToast({ title: "Example", description: "Notificacion de ejemplo" })}>
        Añadir Notificacion
      </button>
      <Progress percent={PercentExample} style={{ width: 250 }} />
    </>
  );
}

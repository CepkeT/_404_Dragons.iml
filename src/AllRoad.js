/*  useEffect(() => {
      const animate = () => {
          setRoad((prevRoad) => RoadMove(prevRoad));
          setTimeout(animate, 300);
      };

      setTimeout(animate, 300);
  }, []);
  const [previousTime, setPreviousTime] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const animate = (time) => {
      if (time - previousTime >= 300) {
        setRoad((prevRoad) => RoadMove(prevRoad));
        setPreviousTime(time);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [previousTime]);
  */
/*
useEffect(() => {
    let timeoutId;

    const animate = () => {
      const currentTime = Date.now();
      if (currentTime - previousTime >= 300) {
        setRoad((prevRoad) => RoadMove(prevRoad));
        setPreviousTime(currentTime);
      }
      timeoutId = setTimeout(animate, 300);
    };

    timeoutId = setTimeout(animate, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [previousTime]);
  */
import React, { useEffect, useState, useCallback } from "react";
import ObjectCreator from "./ObjectCreator";
import Hero from "./Hero";
import ObjectCreatorEarth from "./ObjectCreatorEarth";
import ObjectCreatorGrass from "./ObjectCreatorGrass";
import ObjectCreatorBird from "./ObjectCreatorBird";
import "./style/AllRoad.css";
import RoadMove from "./RoadMove";

/* Мемоизированные компоненты для оптимизации рендеринга
созданные с помощью React.memo. Они используются для  предотвращения ненужной перерисовки этих компонентов,
если их пропсы не изменились.*/
const ObjectCreatorBirdMemo = React.memo(ObjectCreatorBird);
const HeroMemo = React.memo(Hero);
const ObjectCreatorGrassMemo = React.memo(ObjectCreatorGrass);
const ObjectCreatorEarthMemo = React.memo(ObjectCreatorEarth);

function AllRoad({ Road }) {
  // Состояние для хранения текущего состояния дороги
  const [road, setRoad] = useState(Road);

  /* Функция для анимации дороги созданная с помощью useCallback,
   которая выполняет анимацию дороги путем вызова RoadMove
   и обновления состояния road.*/
  const animateRoad = useCallback(() => {
    setRoad((prevRoad) => RoadMove(prevRoad));
  }, [Road]);

  // Состояние для хранения предыдущего времени
  const [previousTime, setPreviousTime] = useState(0);

  useEffect(() => {
    let animationFrameId;

    /*Функция для анимации времени
      useEffect используется для запуска анимации и обновления состояния дороги.
      Он вызывает функцию animateTime при каждом изменении previousTime.
      Если прошло достаточно времени (300 миллисекунд) с момента предыдущего кадра,
      она вызывает animateRoad для обновления состояния дороги и обновляет previousTime.
      Затем она планирует следующий кадр анимации с помощью requestAnimationFrame.*/
    const animateTime = (time) => {
      if (time - previousTime >= 300) {
        animateRoad(); // Вызов функции анимации дороги
        setPreviousTime(time); // Обновление предыдущего времени
      }
      animationFrameId = requestAnimationFrame(animateTime); // Запланировать следующий кадр анимации
    };

    animationFrameId = requestAnimationFrame(animateTime); // Запуск анимации

    return () => {
      cancelAnimationFrame(animationFrameId);
      /* Очистка анимации при размонтировании компонента
      используется возвращаемой функции useEffect для
      очистки анимации при размонтировании компонента.*/
    };
  }, [previousTime, animateRoad]);

  const windowWidth = window.innerWidth;
  const objectCount = Math.floor(windowWidth / 35);
  /* Вычисление количества элементов в строке
  windowWidth и objectCount вычисляются для определения
  количества элементов в строке на основе ширины окна*/

  return (
      <div className="AllRoadContainer">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
            <div key={rowIndex} className="RowContainer">
              {Array.from({ length: objectCount }).map((_, objectIndex) => {
                let component;

                if (rowIndex === 13) {
                  component = <ObjectCreatorBirdMemo objectIndex={road[objectIndex]} />;
                } else if (rowIndex === 14) {
                  if (objectIndex === 5) {
                    component = <HeroMemo />;
                  } else {
                    component = <ObjectCreator objectIndex={road[objectIndex]} />;
                  }
                } else if (rowIndex === 15) {
                  component = <ObjectCreatorGrassMemo objectIndex={road[objectIndex]} />;
                } else if (rowIndex === 16) {
                  component = <ObjectCreatorEarthMemo objectIndex={road[objectIndex]} />;
                }

                return (
                    <div key={objectIndex} className="PixelContainer">
                      {component}
                    </div>
                );
              })}
            </div>
        ))}
      </div>
  );
}

export default AllRoad;
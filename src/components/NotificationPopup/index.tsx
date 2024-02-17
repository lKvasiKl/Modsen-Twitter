import { useEffect } from "react";

import { getNotificationSelector } from "store/selectors/appSelectors";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { setNotification } from "store/slice/appSlice";

import { DEFAULT_POPUP_VALUE, VISIBILITY_TIME } from "./config";

import { Popup } from "./styled";

export const NotificationPopup = () => {
  const dispatch = useAppDispatch();

  const { isVisible, message } = useAppSelector(getNotificationSelector);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(
      () => dispatch(setNotification(DEFAULT_POPUP_VALUE)),
      VISIBILITY_TIME,
    );

    return () => clearTimeout(timer);
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return <Popup>{message}</Popup>;
};

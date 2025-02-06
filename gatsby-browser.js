
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
    window.history.scrollRestoration = 'manual';
    const currentPosition = getSavedScrollPosition(location, location.key);
    if (!currentPosition) {
        window.scrollTo(0, 0);
    } else {
        window.setTimeout(() => {
            window.requestAnimationFrame(() => {
                window.scrollTo(...currentPosition);
            });
        }, 0);
    }

    return false;
};

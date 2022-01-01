// Convert time to hours and minutes
export const calcTime = (time: number) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  };

  export const isPersistedState = (stateName: string): any => {
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState);
  };
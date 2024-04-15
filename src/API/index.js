export const fetchPlayers = async () => {
  try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players');
      if (!response.ok) {
          throw new Error('Failed to fetch players');
      }
      return response.json();
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const fetchSinglePlayer = async (id) => {
  try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players/${id}`);
      if (!response.ok) {
          throw new Error('Failed to fetch single player');
      }
      return response.json();
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const createPlayer = async (playerData) => {
  try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(playerData),
      });
      if (!response.ok) {
          throw new Error('Failed to create player');
      }
      return response.json();
  } catch (error) {
      console.error(error);
      return null;
  }
};
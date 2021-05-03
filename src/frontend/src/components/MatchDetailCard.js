import { React } from 'react';

export const MatchDetailCard = ({match}) => {
  if (!match) return null;
  return (
    <div className="MatchDetailCard">
     <h3>Latest Matches</h3>
     <h3>Match Details</h3>
     <h4><p>{match.team1} vs {match.team2}</p></h4>
    </div>
  );
}

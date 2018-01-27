var playlist = {
  ['Tom Petty']: 'Runnin Down a Dream',
  [Eagles]: 'Hotel California',
  ['Def Leppard']: 'Animal'
};

function updatePlaylist(playlist, artist, song) {
  playlist.Scorpions = 'Wind of Change';
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}

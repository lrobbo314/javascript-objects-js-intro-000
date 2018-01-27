var playlist = {
  ['Slowdive'] = 'Alison',
  ['My Bloody Valentine'] = 'Sometimes'
};

function updatePlaylist(playlist, artist, song) {
  playlist.Scorpions = 'Wind of Change';
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}

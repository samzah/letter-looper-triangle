var letter = prompt('Give me a letter');

for (i = 0; i < 10; i++) {
  document.write(letter);
  document.write('<br>');
  document.write(letter+=letter);
  document.write('<br>');

}


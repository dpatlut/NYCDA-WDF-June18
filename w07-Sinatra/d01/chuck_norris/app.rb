require_relative 'structure'

chuck = ChuckJokes.new

def norris_face
  puts "                                    MMMMMMMMMMM                                         "
  puts "                                 MMMMMMMMMMMMMMMMM                                      "
  puts "                             NMMMMMMMMMMMMMMMMMMMMMMMM                                  "
  puts "                           MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                              "
  puts "                          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN                          "
  puts "                          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                         "
  puts "                         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                        "
  puts "                         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMD                       "
  puts "                        DMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                       "
  puts "                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                       "
  puts "                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                       "
  puts "                       MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                      "
  puts "                       MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                      "
  puts "                      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN                     "
  puts "                      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN         "
  puts "                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN     "
  puts "                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN   "
  puts "NM                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  "
  puts "MMMMM              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM "
  puts " MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
  puts "  MMMMMMMMMMMMMMMMMMMMMMMMMM8MMMMMMMMMIMMMMM8,. ...........OMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
  puts "     MMMMMMMMMMMMMMMMMMMMMMM ..N. .....~MMMM...............:MMMMNMMMMMMMMMMMMMMMMMMMMMMM"
  puts "       NMMMMMMMMMMMMMMMMMMMMM.....:..DMMMMMNZ Z.... .......M$MMMMMMMMMMMMMMMMMMMMMMMMMMM"
  puts "           MMMMMMMMMMNMMMMMMM....... 7=MMMMMMO....Z .......MM7MMMMMMMMMMMMMMMMMMMMMMMMM "
  puts "              MMMMMMMMMMMMMMMMM  Z...MMMZ .. .,M..,........MMMMMMMMMMMMMMMMMMMMMMMMMMMM "
  puts "                  MMMMMM.......DOM ....N7..................MMMMMMMMMMMMMMMMMMMMMMMMMMM  "
  puts "                     MMM....... M. ... .  ... ..............M...$MMMMMMMMMMMMMMMMMMMM   "
  puts "                       ........... ........~. ..............M..=....+MMMMMMMMMMMMMM     "
  puts "                       ......+.NMI~........ . ..............M.,.I...MMMMMMMMMMMMMMN     "
  puts "                       ......$... ...... O..................,.....$MMMMMMMMMMMMN        "
  puts "                       .....M.......... M M.. .............. 8  .OMMMMMMMMMMMN          "
  puts "                        ..=7I,,.,,IMI...M.................. ..MMMMMMMMMMM               "
  puts "                        ....DMMMMMMMMMMMMMMMO..............D...MMMMMMMMM                "
  puts "                         .MMMMMMMMMMMMMMDDMM:,N..............DMMMMMMMMMMM               "
  puts "                         NMMMMMNMM8 . .... ...,~............  MMMMMMMMM                 "
  puts "                         MMMMM,:......::~..M8M8MM...............MMMMMM                  "
  puts "                         MMMM ... . .........,MM..............MMMMMO$                   "
  puts "                         MMMMM... =.=. .. . . MM ....... . ...MMMMMMM                   "
  puts "                          NMMMMMMMMMM?  ..O.?NM7 ....... ......MMMMMM                   "
  puts "                           NMMMMMMMMMMMMMMMMM........  $ . ...MMMNMMM                   "
  puts "                            MMMMMMMMMMMMMMM.........,, ......MMMMMMMM                   "
  puts "                             OMMMMMMMM8 , .. .. .,N.... ...:MMMMMMMMMMN                 "
  puts "                              MMMMMMMM?N. ...~MD.:MNI8MMMMMMMMMMMMMMMMMN                "
  puts "                         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN              "
  puts "                      NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN             "
  puts "                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN        "
  puts "                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM     "
  puts "               MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM    "
  puts "              NMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  "
  puts "             MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM "
end

if ARGV.empty?
  ChuckJokes.help
else
  if ARGV.length == 2
    puts chuck.replace_name(ARGV[0], ARGV[1])
  elsif ARGV[0] == 'random'
    puts chuck.random
  else
    puts chuck.get_joke_by_id(ARGV[0])
    # norris_face if chuck.get_joke_by_id(ARGV[0]) == nil
  end
end
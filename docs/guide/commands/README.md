# Full Commands List
Here you can find a list of all the commands for the bot

## Dice Rolling
| Command     | Description |
| ----------- | ----------- |
| **`/roll`** *[expression] [num_rolls] [secret] [title]* |  Roll using a [expression](/guide/commands/dice/#expression). Optionally provide how many times to run the provided expression, keep the message hidden from public, or provide a title on the roll.|

## Initiative
| Command     | Description |
| ----------- | ----------- |
| **`/initiative create`** *[title]* |  Creates a new [initiative](/guide/commands/initiative/) session with the provided title. |
| **`/initiative end`** *[title]* |  End a [initiative](/guide/commands/initiative/) session with the provided title. |
| **`/initiative join`** *[initiative_name] [character_name]* |  Joins a [initiative](/guide/commands/initiative/) session with the provided [character](/guide/commands/character). |
| **`/initiative remove`** *[initiative_name] [character_name]* |  Remove a [character](/guide/commands/character) from the provided [initiative](/guide/commands/initiative/) session. |
| **`/initiative edit`** *[initiative_name] [character_name] [roll]* |  Modify a [character's](/guide/commands/character) roll in the provided [initiative](/guide/commands/initiative/) session. |

## Character
| Command     | Description |
| ----------- | ----------- |
| **`/character create`** *[name]* |  Creates a new [character](/guide/commands/character/). |
| **`/character delete`** *[name]* |  Deletes a [character](/guide/commands/character/) with the provided name. |
| **`/character edit`** *[name]* |  Edits a [character](/guide/commands/character/) the provided name. |

## Testing
| Command     | Description |
| ----------- | ----------- |
| **`/ping`** | Replies with 'pong' |
| **`/pong`** | Replies with 'ping |

## Information
| Command     | Description |
| ----------- | ----------- |
| **`/help`** | View information about how to use the bot! |
| **`/info`** | Displays info about the bot. |
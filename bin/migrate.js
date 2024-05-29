#!/usr/bin/env node

import { program } from 'commander'
import { migrateData } from '../src/index.js'

program
  .option('--silent <silent>', 'Suppress console output')
  .option('--accept-all <accept-all>', 'Automatically accept all prompts')
  .option('--source <source>', 'Source PostgreSQL connection string')
  .option('--destination <destination>', 'Destination PostgreSQL connection string')
  .option('--backup-file-path <backup-file-path>', 'Path of the backup file name')

program.parse(process.argv)

const options = program.opts()

process.env.SILENT = options.silent
process.env.ACCEPT_ALL = options.acceptAll
process.env.SOURCE_CONNECTION_STRING = options.source
process.env.DESTINATION_CONNECTION_STRING = options.destination
process.env.BACKUP_FILE_PATH = options.backupFilePath

migrateData()

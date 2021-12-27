import * as fs from 'fs'
import * as path from 'path'
import * as url from 'url'

const snapshotDirName = '__snapshots__'
const dirname = path.dirname(url.fileURLToPath(import.meta.url))

/**
 *
 * @param {string} data
 * @param {string} fname
 * @param {boolean} update
 * @returns data
 */
export function genSnapshot(data, fname, update) {
  const snapshotDir = path.resolve(dirname, snapshotDirName)
  const filePath = path.join(snapshotDir, `${fname}.css.snap`)

  if (!fs.existsSync(snapshotDir)) {
    fs.mkdirSync(snapshotDir)
  }

  if (!fs.existsSync(filePath) || update) {
    fs.writeFileSync(filePath, data, 'utf-8')
    return data
  }
  return fs.readFileSync(filePath, 'utf-8')
}

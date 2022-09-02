/**
 * @constructor
 * @property {number} id
 * @property {string} content
 * @property {boolean} isCompleted
 * @property {string} category
 * @property {Array<string>} tags
 */

/**
 * Create ToDo
 * @param {number} id
 * @param {string} content
 * @param {string} category
 * @param {boolean} isCompleted
 * @param {Array<string>} tags
 * @return {object}
 *
 */
function CreateToDo(id, content, category, isCompleted, tags) { }

/**
 * Can't Create without content
 * @param {string} content
 * @return {boolean}
 */
function CreateToDoWithContent(content) {}

/**
 * Read ToDo
 * @return {Array<unknown>} - Array of ToDo
 */
function getToDoList() { }

/**
 * Read ToDo by ID
 * @param {number} id
 * @return {Array<unknown>}
 */
function getToDoById(id) { }

/**
 * Update properties except ID
 * @param {string} content
 * @param {boolean} isCompleted
 * @param {string} category
 * @param {Array<string>} tags
 * @return {Array<unknown>}
 */
function updateToDo(content, isCompleted, category, tags) { }

/**
 * Update specific tags
 * @param {number} id
 * @param {Array<string>} tags
 * @return {Array<unknown>}
 */
function updateTag(id, tags) { }

/**
 * Delete ToDo by ID
 * @param {number} id
 * @return {boolean}
 */
function deleteToDoById(id) { }

/**
 * Delete All To Do
 * @return {boolean}
 */
function deleteAllToDos() { }

/**
 * Delete specific tags
 * @param {number} id
 * @property {Array<string>} tags
 * @return {Array<unknown>}
 */
function deleteTag(id, tag) { }

/**
 * Delete all specific tags
 * @param {number} id
 * @property {Array<string>} tags
 * @return {Array<unknown>}
 */
function deleteAllTag(id, tag) {}

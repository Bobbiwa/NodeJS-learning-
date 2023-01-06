/**,
 * @swagger
 * /findAll:
 *    get:
 *      tags:
 *      - User
 *      summary: 查询所有用户
 *      produces:
 *      - application/json
 *      responses:
 *        200:
 *          description: successful operation
 *          schema:
 *            ref: #/definitions/Order
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * */

/**,
 * @swagger
 * /findById:
 *    get:
 *      tags:
 *      - User
 *      summary: 根据id查询用户
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: id
 *        in: query
 *        description: id
 *        required: true
 *        type: string
 *        maximum:
 *        minimum: 1
 *        format:
 *      responses:
 *        200:
 *          description: successful operation
 *          schema:
 *            ref: #/definitions/Order
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * */

/**,
* @swagger
* /create:
*    post:
*      tags:
*      - User
*      summary: 创建新用户
*      produces:
*      - application/json
*      parameters:
*      - name: login
*        in: query
*        description: login
*        required: false
*        type: string
*        maximum:
*        minimum: 1
*        format:
*      - name: password
*        in: query
*        description: password
*        required: true
*        type: string
*        maximum:
*        minimum: 1
*        format:
*      - name: age
*        in: query
*        description: age
*        required: false
*        type: number
*        maximum:
*        minimum: 1
*        format:
*      - name: isDelete
*        in: query
*        description: isDelete
*        required: false
*        type: boolean
*        maximum:
*        minimum: 1
*        format:
*      responses:
*        200:
*          description: successful operation
*          schema:
*            ref: #/definitions/Order
*        400:
*          description: Invalid ID supplied
*        404:
*          description: Order not found
* */

/**,
 * @swagger
 * /update:
 *    post:
 *      tags:
 *      - User
 *      summary: 根据id更新用户
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: id
 *        in: query
 *        description: id
 *        required: true
 *        type: string
 *        maximum:
 *        minimum: 1
 *        format:
 *      - name: login
 *        in: query
 *        description: login
 *        required: false
 *        type: string
 *        maximum:
 *        minimum: 1
 *        format:
 *      - name: password
 *        in: query
 *        description: password
 *        required: true
 *        type: string
 *        maximum:
 *        minimum: 1
 *        format:
 *      - name: age
 *        in: query
 *        description: age
 *        required: false
 *        type: number
 *        maximum:
 *        minimum: 1
 *        format:
 *      - name: isDelete
 *        in: query
 *        description: isDelete
 *        required: false
 *        type: boolean
 *        maximum:
 *        minimum: 1
 *        format:
 *      responses:
 *        200:
 *          description: successful operation
 *          schema:
 *            ref: #/definitions/Order
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * */

/**,
 * @swagger
 * /delete:
 *    delete:
 *      tags:
 *      - User
 *      summary: 根据id删除用户
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: id
 *        in: query
 *        description: id
 *        required: true
 *        type: string
 *        maximum:
 *        minimum: 1
 *        format:
 *      responses:
 *        200:
 *          description: successful operation
 *          schema:
 *            ref: #/definitions/Order
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * */

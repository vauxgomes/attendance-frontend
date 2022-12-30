import axios from 'axios'

class API {
  constructor(token = null) {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL
    })

    this.token(token)
  }

  token(token) {
    this.config = {
      headers: {
        Authorization: token
      }
    }

    return this
  }

  /** Utils */

  params(params) {
    return Object.entries(params)
      .filter((p) => p[1])
      .map((p) => `${p[0]}=${p[1]}`)
      .join('&')
  }

  /** LOGIN */

  async login(username, password) {
    const response = await this.api.post('/login', { username, password })
    return response.data
  }

  /** LOVS */

  async getUsersList() {
    const response = await this.api.get('/users/list', this.config)
    return response.data
  }

  async getStudentsList() {
    const response = await this.api.get('/students/list', this.config)
    return response.data
  }

  async getCoursesList() {
    const response = await this.api.get('/courses/list', this.config)
    return response.data
  }

  async getSubjectsList() {
    const response = await this.api.get('/subjects/list', this.config)
    return response.data
  }

  /** USERS */

  async getUsers(page) {
    const response = await this.api.get(
      `/users?${this.params({ page })}`,
      this.config
    )
    return response.data
  }

  async postUser(user) {
    const response = await this.api.post('/users/create', user, this.config)
    return response.data
  }

  async putUser(id, user) {
    const response = await this.api.put(
      `/users/${id}/update`,
      user,
      this.config
    )
    return response.data
  }

  async deleteUser(id) {
    const response = await this.api.delete(`/users/${id}/delete`, this.config)
    return response.data
  }

  /** STUDENTS */

  async getStudents(page) {
    const response = await this.api.get(
      `/students?${this.params({ page })}`,
      this.config
    )
    return response.data
  }

  async postStudent(student) {
    const response = await this.api.post(
      '/students/create',
      student,
      this.config
    )
    return response.data
  }

  async putStudent(id, student) {
    const response = await this.api.put(
      `/students/${id}/update`,
      student,
      this.config
    )
    return response.data
  }

  async deleteStudent(id) {
    const response = await this.api.delete(
      `/students/${id}/delete`,
      this.config
    )
    return response.data
  }

  /** COURSES */

  async getCourses(page) {
    const response = await this.api.get(
      `/courses?${this.params({ page })}`,
      this.config
    )
    return response.data
  }

  async postCourse(course) {
    const response = await this.api.post('/courses/create', course, this.config)
    return response.data
  }

  async putCourse(id, course) {
    const response = await this.api.put(
      `/courses/${id}/update`,
      course,
      this.config
    )
    return response.data
  }

  async deleteCourse(id) {
    const response = await this.api.delete(`/courses/${id}/delete`, this.config)
    return response.data
  }

  /** SUBJECTS **/

  async getSubjects(course_id, page) {
    const response = await this.api.get(
      `/courses/${course_id}/subjects?${this.params({ page })}`,
      this.config
    )
    return response.data
  }

  async postSubject(course_id, subject) {
    const response = await this.api.post(
      `/courses/${course_id}/subjects/create`,
      subject,
      this.config
    )
    return response.data
  }

  async putSubject(course_id, id, subject) {
    const response = await this.api.put(
      `/courses/${course_id}/subjects/${id}/update`,
      subject,
      this.config
    )
    return response.data
  }

  async deleteSubject(course_id, id) {
    const response = await this.api.delete(
      `/courses/${course_id}/subjects/${id}/delete`,
      this.config
    )
    return response.data
  }

  /** CLASSES **/

  async getClasses(subject_id, page) {
    const response = await this.api.get(
      `/subjects/${subject_id}/classes?${this.params({ page })}`,
      this.config
    )
    return response.data
  }

  async postClass(subject_id, subject) {
    const response = await this.api.post(
      `/subjects/${subject_id}/classes/create`,
      subject,
      this.config
    )
    return response.data
  }

  async putClass(subject_id, id, subject) {
    const response = await this.api.put(
      `/subjects/${subject_id}/classes/${id}/update`,
      subject,
      this.config
    )
    return response.data
  }

  async deleteClass(subject_id, id) {
    const response = await this.api.delete(
      `/subjects/${subject_id}/classes/${id}/delete`,
      this.config
    )
    return response.data
  }

  /** USER-CLASSES */

  async getUserClasses(page) {
    const response = await this.api.get(
      `/classes?${this.params({ page })}`,
      this.config
    )
    return response.data
  }

  /** CLASS-STUDENTS **/

  async getClassStudents(class_id, page) {
    const response = await this.api.get(
      `/classes/${class_id}/students?${this.params({ page })}`,
      this.config
    )
    return response.data
  }

  async postClassStudent(class_id, student) {
    const response = await this.api.post(
      `/classes/${class_id}/students/create`,
      student,
      this.config
    )
    return response.data
  }

  async deleteClassStudent(class_id, student_id) {
    const response = await this.api.delete(
      `/classes/${class_id}/students/${student_id}/delete`,
      this.config
    )
    return response.data
  }

  /** ATTENDANCES **/

  async getAttendances(class_id, date) {
    const response = await this.api.get(
      `/classes/${class_id}/attendances/${date}`,
      this.config
    )
    return response.data
  }

  async postAttendance(class_id, attendance) {
    const response = await this.api.post(
      `/classes/${class_id}/attendances/create`,
      attendance,
      this.config
    )
    return response.data
  }

  async putAttendance(class_id, id, student) {
    const response = await this.api.put(
      `/subjects/${class_id}/classes/${id}/update`,
      student,
      this.config
    )
    return response.data
  }

  async deleteAttendance(class_id, student_id) {
    const response = await this.api.delete(
      `/classes/${class_id}/attendances/${student_id}/delete`,
      this.config
    )
    return response.data
  }

  /** FAVORITES **/

  async getFavorites() {
    const response = await this.api.get(`/favorites`, this.config)
    return response.data
  }

  async postFavorite(aClass) {
    const response = await this.api.post(
      `/favorites/create`,
      aClass,
      this.config
    )
    return response.data
  }

  async deleteFavorite(class_id) {
    const response = await this.api.delete(
      `/favorites/${class_id}/delete`,
      this.config
    )
    return response.data
  }
}

export default new API()

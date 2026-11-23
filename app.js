(() => {
  'use strict';

  const FALLBACK_COURSES = [
    {
      id: 'CSE301',
      code: 'CSE301-A',
      name: '웹프로그래밍',
      professor: '김한성 교수',
      semester: '2026-2학기',
      department: '컴퓨터공학부',
      credits: 3,
      schedule: '월 10:30~12:00 / 수 10:30~12:00 (공학관 302호)',
      color: '#003876'
    },
    {
      id: 'CSE304',
      code: 'CSE304-B',
      name: '소프트웨어공학',
      professor: '이낙산 교수',
      semester: '2026-2학기',
      department: '컴퓨터공학부',
      credits: 3,
      schedule: '화 13:30~15:00 / 목 13:30~15:00 (탐구관 405호)',
      color: '#0052A4'
    },
    {
      id: 'CSE309',
      code: 'CSE309-A',
      name: '데이터베이스설계',
      professor: '박삼선 교수',
      semester: '2026-2학기',
      department: '컴퓨터공학부',
      credits: 3,
      schedule: '월 15:00~16:30 / 수 15:00~16:30 (상상관 501호)',
      color: '#0B6E99'
    },
    {
      id: 'CSE312',
      code: 'CSE312-A',
      name: '컴퓨터네트워크',
      professor: '최상상 교수',
      semester: '2026-2학기',
      department: '컴퓨터공학부',
      credits: 3,
      schedule: '화 10:30~12:00 / 목 10:30~12:00 (공학관 205호)',
      color: '#1D4E89'
    }
  ];

  const FALLBACK_ASSIGNMENTS = [
    {
      id: 101,
      courseId: 'CSE301',
      courseName: '웹프로그래밍',
      week: '11주차',
      title: '반응형 대시보드 레이아웃 및 접근성 개선 과제',
      description: '시맨틱 HTML5 태그와 Flexbox/Grid를 활용하여 모바일 및 데스크톱 환경에 대응하는 학사 대시보드 UI를 구현하고 소스코드(ZIP)와 보고서(PDF)를 제출하세요.',
      dueDate: '2026-11-30 23:59',
      status: '미제출',
      score: '100점 만점',
      fileName: null,
      submittedAt: null
    },
    {
      id: 102,
      courseId: 'CSE301',
      courseName: '웹프로그래밍',
      week: '9주차',
      title: 'Fetch API 기반 비동기 게시판 CRUD 구현',
      description: 'REST API와 통신하여 게시글 조회, 작성, 수정, 삭제 기능을 비동기로 구현하고 예외 처리 결과를 스크린샷과 함께 제출하세요.',
      dueDate: '2026-11-15 23:59',
      status: '제출 완료',
      score: '95 / 100',
      fileName: '20261234_홍길동_9주차과제.zip',
      submittedAt: '2026-11-14 21:18'
    },
    {
      id: 103,
      courseId: 'CSE304',
      courseName: '소프트웨어공학',
      week: '12주차',
      title: 'Playwright 기반 웹 E2E 자동화 테스트 명세서',
      description: '핵심 사용자 시나리오 5건에 대한 테스트 케이스를 설계하고, 자동화 검증 결과를 정리하여 제출하세요.',
      dueDate: '2026-12-03 23:59',
      status: '미제출',
      score: '100점 만점',
      fileName: null,
      submittedAt: null
    },
    {
      id: 104,
      courseId: 'CSE309',
      courseName: '데이터베이스설계',
      week: '10주차',
      title: '학사관리 시스템 ERD 정규화(3NF) 설계 보고서',
      description: '학생, 강좌, 수강신청, 과제 테이블 간 관계를 식별하고 제3정규형까지 분해한 ERD와 DDL 스크립트를 제출하세요.',
      dueDate: '2026-11-20 23:59',
      status: '제출 완료',
      score: '100 / 100',
      fileName: '20261234_ERD_정규화보고서.pdf',
      submittedAt: '2026-11-19 18:42'
    },
    {
      id: 105,
      courseId: 'CSE312',
      courseName: '컴퓨터네트워크',
      week: '11주차',
      title: 'Wireshark HTTP/TLS 핸드셰이크 패킷 분석',
      description: 'HTTPS 요청 과정에서의 TCP 3-Way Handshake 및 TLS 협상 패킷을 캡처하고 각 단계를 분석해 제출하세요.',
      dueDate: '2026-12-01 23:59',
      status: '미제출',
      score: '100점 만점',
      fileName: null,
      submittedAt: null
    }
  ];

  const FALLBACK_NOTICES = [
    {
      id: 1,
      category: '학사',
      courseId: 'ALL',
      title: '[공통] 2026학년도 2학기 기말고사 및 과제 마감 일정 안내',
      author: '교수학습지원센터',
      date: '2026-11-20',
      content: '2026학년도 2학기 기말과제 마감은 각 강좌별 안내된 일시를 따르며, 마감 1시간 전에는 접속량이 집중될 수 있으니 여유 있게 제출하시기 바랍니다.'
    },
    {
      id: 2,
      category: '강좌',
      courseId: 'CSE301',
      title: '[웹프로그래밍] 11주차 과제 제출 파일명 규칙 공지',
      author: '김한성 교수',
      date: '2026-11-22',
      content: '파일 첨부 시 "학번_이름_주차과제.zip" 형식을 권장하며, 온라인 텍스트 입력란에 실행 방법 및 특이사항을 간략히 기재해 주세요.'
    },
    {
      id: 3,
      category: '강좌',
      courseId: 'CSE304',
      title: '[소프트웨어공학] 자동화 테스트 시연 평가 기준표 공개',
      author: '이낙산 교수',
      date: '2026-11-21',
      content: '12주차 과제 평가 시 결함 재현성, 네트워크/콘솔 오류 탐지 정확도, 보고서 명확성을 중점적으로 확인합니다.'
    }
  ];

  const state = {
    courses: [],
    assignments: [],
    notices: [],
    selectedCourseId: 'ALL',
    activeView: 'assignments',
    statusFilter: 'ALL',
    searchQuery: '',
    selectedAssignment: null
  };

  const els = {
    navTabs: document.querySelectorAll('.nav-tab'),
    brandLink: document.querySelector('.brand-link'),
    sidebarCourseList: document.getElementById('sidebar-course-list'),
    courseCount: document.getElementById('course-count'),
    breadcrumbCourse: document.getElementById('breadcrumb-course'),
    breadcrumbPage: document.getElementById('breadcrumb-page'),
    pageTitle: document.getElementById('page-title'),
    scrollToRegisterBtn: document.getElementById('scroll-to-register-btn'),

    viewAssignments: document.getElementById('view-assignments'),
    viewCourses: document.getElementById('view-courses'),
    viewNotices: document.getElementById('view-notices'),

    statTotal: document.getElementById('stat-total'),
    statSubmitted: document.getElementById('stat-submitted'),
    statPending: document.getElementById('stat-pending'),

    registerSection: document.getElementById('register-section'),
    selectedCourseBadge: document.getElementById('selected-course-badge'),
    form: document.getElementById('assignment-form'),
    courseSelect: document.getElementById('course-select'),
    weekSelect: document.getElementById('assignment-week'),
    dueDateInput: document.getElementById('due-date'),
    titleInput: document.getElementById('assignment-title'),
    contentInput: document.getElementById('assignment-content'),
    fileInput: document.getElementById('assignment-file'),
    fileDropzone: document.getElementById('file-dropzone'),
    selectedFileLabel: document.getElementById('selected-file-label'),
    errorAlert: document.getElementById('assignment-error-alert'),
    successAlert: document.getElementById('assignment-success-alert'),
    resetFormBtn: document.getElementById('reset-form-btn'),
    submitBtn: document.getElementById('submit-assignment-btn'),

    statusFilter: document.getElementById('status-filter'),
    searchInput: document.getElementById('assignment-search'),
    assignmentTbody: document.getElementById('assignment-tbody'),

    coursesGrid: document.getElementById('courses-grid'),
    noticeList: document.getElementById('notice-list'),

    modal: document.getElementById('detail-modal'),
    modalCourse: document.getElementById('modal-course'),
    modalTitle: document.getElementById('modal-title'),
    modalDesc: document.getElementById('modal-desc'),
    modalStatus: document.getElementById('modal-status'),
    modalDue: document.getElementById('modal-due'),
    modalScore: document.getElementById('modal-score'),
    modalFile: document.getElementById('modal-file'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    modalCancelBtn: document.getElementById('modal-cancel-btn'),
    modalSubmitShortcutBtn: document.getElementById('modal-submit-shortcut-btn')
  };

  function isLocalApiMode() {
    return (
      (window.location.protocol === 'http:' || window.location.protocol === 'https:') &&
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    );
  }

  function isHttpMode() {
    return window.location.protocol === 'http:' || window.location.protocol === 'https:';
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async function loadInitialData() {
    if (!isLocalApiMode()) {
      state.courses = [...FALLBACK_COURSES];
      state.assignments = [...FALLBACK_ASSIGNMENTS];
      state.notices = [...FALLBACK_NOTICES];
      renderAll();
      return;
    }

    const [coursesRes, assignmentsRes, noticesRes] = await Promise.all([
      fetch('/api/courses'),
      fetch('/api/assignments'),
      fetch('/api/notices')
    ]);

    const coursesJson = await coursesRes.json();
    const assignmentsJson = await assignmentsRes.json();
    const noticesJson = await noticesRes.json();

    state.courses = coursesJson.data || [];
    state.assignments = assignmentsJson.data || [];
    state.notices = noticesJson.data || [];
    renderAll();
  }

  function renderAll() {
    renderSidebarCourses();
    renderCourseSelect();
    renderAssignmentStatsAndTable();
    renderCourseCards();
    renderNotices();
    updateHeaderContext();
  }

  function renderSidebarCourses() {
    els.courseCount.textContent = String(state.courses.length);

    const allItem = `
      <li>
        <button
          type="button"
          class="course-item-btn ${state.selectedCourseId === 'ALL' ? 'is-active' : ''}"
          data-course-id="ALL"
        >
          <span class="course-item-title">전체 강좌</span>
          <span class="course-item-sub">수강 중인 모든 강좌 보기</span>
        </button>
      </li>
    `;

    const items = state.courses
      .map(
        (course) => `
          <li>
            <button
              type="button"
              class="course-item-btn ${state.selectedCourseId === course.id ? 'is-active' : ''}"
              data-course-id="${escapeHtml(course.id)}"
            >
              <span class="course-item-title">${escapeHtml(course.name)}</span>
              <span class="course-item-sub">${escapeHtml(course.code)} · ${escapeHtml(course.professor)}</span>
            </button>
          </li>
        `
      )
      .join('');

    els.sidebarCourseList.innerHTML = allItem + items;
  }

  function renderCourseSelect() {
    const currentValue = els.courseSelect.value || (state.selectedCourseId !== 'ALL' ? state.selectedCourseId : state.courses[0]?.id || '');

    els.courseSelect.innerHTML = state.courses
      .map(
        (course) =>
          `<option value="${escapeHtml(course.id)}">${escapeHtml(course.name)} (${escapeHtml(course.code)})</option>`
      )
      .join('');

    if (currentValue && state.courses.some((c) => c.id === currentValue)) {
      els.courseSelect.value = currentValue;
    }

    updateSelectedCourseChip();
  }

  function updateSelectedCourseChip() {
    const course = state.courses.find((c) => c.id === els.courseSelect.value) || state.courses[0];
    if (course) {
      els.selectedCourseBadge.textContent = `${course.name} (${course.code})`;
    }
  }

  function getFilteredAssignments() {
    return state.assignments.filter((item) => {
      if (state.selectedCourseId !== 'ALL' && item.courseId !== state.selectedCourseId) {
        return false;
      }
      if (state.statusFilter !== 'ALL' && item.status !== state.statusFilter) {
        return false;
      }
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.trim().toLowerCase();
        const hay = `${item.title} ${item.courseName} ${item.week}`.toLowerCase();
        if (!hay.includes(q)) {
          return false;
        }
      }
      return true;
    });
  }

  function renderAssignmentStatsAndTable() {
    const courseScoped = state.assignments.filter(
      (item) => state.selectedCourseId === 'ALL' || item.courseId === state.selectedCourseId
    );
    const submittedCount = courseScoped.filter((item) => item.status === '제출 완료').length;
    const pendingCount = courseScoped.filter((item) => item.status !== '제출 완료').length;

    els.statTotal.textContent = String(courseScoped.length);
    els.statSubmitted.textContent = String(submittedCount);
    els.statPending.textContent = String(pendingCount);

    const list = getFilteredAssignments();
    if (list.length === 0) {
      els.assignmentTbody.innerHTML = `
        <tr>
          <td colspan="6" class="empty-row">조건에 맞는 과제가 없습니다.</td>
        </tr>
      `;
      return;
    }

    els.assignmentTbody.innerHTML = list
      .map((item) => {
        const isSubmitted = item.status === '제출 완료';
        const statusClass = isSubmitted ? 'status-submitted' : 'status-pending';
        const actionLabel = isSubmitted ? '상세 보기' : '제출하기';
        const actionType = isSubmitted ? 'detail' : 'prefill';

        return `
          <tr data-assignment-id="${item.id}">
            <td>${escapeHtml(item.week)}</td>
            <td>${escapeHtml(item.courseName)}</td>
            <td>
              <button type="button" class="assignment-link" data-action="detail" data-id="${item.id}">
                ${escapeHtml(item.title)}
              </button>
            </td>
            <td>${escapeHtml(item.dueDate)}</td>
            <td><span class="status-badge ${statusClass}">${escapeHtml(item.status)}</span></td>
            <td>
              <button type="button" class="btn btn-secondary btn-sm" data-action="${actionType}" data-id="${item.id}">
                ${actionLabel}
              </button>
            </td>
          </tr>
        `;
      })
      .join('');
  }

  function renderCourseCards() {
    els.coursesGrid.innerHTML = state.courses
      .map((course) => {
        const count = state.assignments.filter((a) => a.courseId === course.id).length;
        const pending = state.assignments.filter((a) => a.courseId === course.id && a.status !== '제출 완료').length;

        return `
          <article class="course-card">
            <div class="course-card-banner" style="background: ${escapeHtml(course.color)};">
              <div class="course-card-code">${escapeHtml(course.code)} · ${escapeHtml(course.semester)}</div>
              <h3>${escapeHtml(course.name)}</h3>
            </div>
            <div class="course-card-body">
              <div><strong>담당 교수:</strong> ${escapeHtml(course.professor)} (${escapeHtml(course.department)})</div>
              <div><strong>강의 시간:</strong> ${escapeHtml(course.schedule)}</div>
              <div><strong>과제 현황:</strong> 전체 ${count}건 / 미제출 ${pending}건</div>
            </div>
            <div class="course-card-footer">
              <button type="button" class="btn btn-primary btn-sm" data-enter-course="${escapeHtml(course.id)}">
                강의실 과제 보기
              </button>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function renderNotices() {
    const filtered = state.notices.filter(
      (n) => state.selectedCourseId === 'ALL' || n.courseId === 'ALL' || n.courseId === state.selectedCourseId
    );

    els.noticeList.innerHTML = filtered
      .map(
        (notice) => `
          <article class="notice-item">
            <div class="notice-meta">
              <span class="notice-tag">${escapeHtml(notice.category)}</span>
              <span>${escapeHtml(notice.author)}</span>
              <span>·</span>
              <span>${escapeHtml(notice.date)}</span>
            </div>
            <h3>${escapeHtml(notice.title)}</h3>
            <p>${escapeHtml(notice.content)}</p>
          </article>
        `
      )
      .join('');
  }

  function updateHeaderContext() {
    const selectedCourse = state.courses.find((c) => c.id === state.selectedCourseId);
    els.breadcrumbCourse.textContent = selectedCourse ? selectedCourse.name : '전체 강좌';

    const viewTitles = {
      assignments: { crumb: '과제 관리', heading: '과제 목록 및 등록' },
      courses: { crumb: '나의 강좌', heading: '수강 강좌 목록' },
      notices: { crumb: '공지사항', heading: 'e-class 공지사항' }
    };

    const meta = viewTitles[state.activeView] || viewTitles.assignments;
    els.breadcrumbPage.textContent = meta.crumb;
    els.pageTitle.textContent = meta.heading;
  }

  function switchView(viewName) {
    state.activeView = viewName;
    els.navTabs.forEach((tab) => {
      tab.classList.toggle('is-active', tab.dataset.view === viewName);
    });

    els.viewAssignments.hidden = viewName !== 'assignments';
    els.viewCourses.hidden = viewName !== 'courses';
    els.viewNotices.hidden = viewName !== 'notices';
    updateHeaderContext();
  }

  function selectCourse(courseId) {
    state.selectedCourseId = courseId;
    if (courseId !== 'ALL') {
      els.courseSelect.value = courseId;
      updateSelectedCourseChip();
    }
    renderSidebarCourses();
    renderAssignmentStatsAndTable();
    renderNotices();
    updateHeaderContext();
  }

  function clearAlerts() {
    els.errorAlert.hidden = true;
    els.errorAlert.textContent = '';
    els.successAlert.hidden = true;
    els.successAlert.textContent = '';
  }

  function showErrorAlert(message) {
    els.successAlert.hidden = true;
    els.errorAlert.textContent = message;
    els.errorAlert.hidden = false;
  }

  function showSuccessAlert(message) {
    els.errorAlert.hidden = true;
    els.successAlert.textContent = message;
    els.successAlert.hidden = false;
  }

  function openDetailModal(assignmentId) {
    const item = state.assignments.find((a) => a.id === Number(assignmentId));
    if (!item) return;

    state.selectedAssignment = item;
    els.modalCourse.textContent = `${item.courseName} · ${item.week}`;
    els.modalTitle.textContent = item.title;
    els.modalDesc.textContent = item.description;
    els.modalStatus.textContent = item.submittedAt
      ? `${item.status} (${item.submittedAt})`
      : item.status;
    els.modalDue.textContent = item.dueDate;
    els.modalScore.textContent = item.score;
    els.modalFile.textContent = item.fileName || '첨부된 파일 없음';
    els.modal.hidden = false;
  }

  function closeDetailModal() {
    els.modal.hidden = true;
    state.selectedAssignment = null;
  }

  function prefillForSubmission(assignment) {
    switchView('assignments');
    els.courseSelect.value = assignment.courseId;
    updateSelectedCourseChip();
    els.weekSelect.value = assignment.week;
    els.titleInput.value = `${assignment.title} 제출`;
    els.contentInput.value = '';
    clearAlerts();
    els.registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    els.titleInput.focus();
  }

  async function handleAssignmentSubmit(event) {
    event.preventDefault();
    clearAlerts();

    const courseId = els.courseSelect.value;
    const week = els.weekSelect.value;
    const title = els.titleInput.value.trim();
    const description = els.contentInput.value.trim();
    const dueDate = els.dueDateInput.value;
    const fileName = els.fileInput.files && els.fileInput.files[0] ? els.fileInput.files[0].name : null;

    if (!title) {
      showErrorAlert('과제 제목을 입력해 주세요.');
      els.titleInput.focus();
      return;
    }

    els.submitBtn.disabled = true;
    els.submitBtn.textContent = '등록 중...';

    // [INTENTIONAL BUG]
    // 서버 API(POST /api/assignments)는 필수 필드명으로 `title`을 검증하지만,
    // 프론트엔드가 오타 필드명 `assignment_title`로 전송하여 과제 등록이 항상 실패(HTTP 500)합니다.
    const payload = {
      courseId,
      week,
      assignment_title: title,
      description: description || '온라인 과제 제출',
      dueDate: dueDate ? dueDate.replace('T', ' ') : '2026-12-05 23:59',
      fileName
    };

    try {
      if (!isHttpMode()) {
        if (!payload.title) {
          const offlineErr = "과제 등록에 실패했습니다. 필수 요청 필드 'title'이 누락되어 저장할 수 없습니다. (HTTP 500)";
          showErrorAlert(`[과제 등록 오류] ${offlineErr}`);
          console.error('[E-CLASS 과제 등록 오류]', offlineErr, { payload });
          throw new Error(`ASSIGNMENT_REGISTER_FAILED: ${offlineErr}`);
        }
      }

      const apiEndpoint = isLocalApiMode() ? '/api/assignments' : './api/assignments';
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        const serverMsg =
          result.message ||
          (!payload.title
            ? "과제 등록에 실패했습니다. 필수 요청 필드 'title'이 누락되어 저장할 수 없습니다."
            : '서버 오류로 인해 과제가 등록되지 않았습니다.');
        const fullMessage = `[과제 등록 오류] ${serverMsg} (HTTP ${response.status})`;
        showErrorAlert(fullMessage);
        console.error('[E-CLASS 과제 등록 오류]', {
          endpoint: `POST ${apiEndpoint}`,
          status: response.status,
          code: result.code || 'ASSIGNMENT_REGISTER_FAILED',
          message: serverMsg,
          sentKeys: Object.keys(payload)
        });
        throw new Error(`ASSIGNMENT_REGISTER_FAILED (HTTP ${response.status}): ${serverMsg}`);
      }

      // (의도된 오류가 수정되어 정상 응답 201이 올 경우 동작하는 정상 경로)
      state.assignments.unshift(result.data);
      renderAssignmentStatsAndTable();
      els.form.reset();
      els.selectedFileLabel.textContent = '지원 형식: PDF, HWP, DOCX, ZIP, TXT (최대 50MB)';
      showSuccessAlert(`"${result.data.title}" 과제가 정상적으로 등록되었습니다.`);
    } finally {
      els.submitBtn.disabled = false;
      els.submitBtn.textContent = '과제 등록';
    }
  }

  function bindEvents() {
    els.navTabs.forEach((tab) => {
      tab.addEventListener('click', () => switchView(tab.dataset.view));
    });

    els.brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      selectCourse('ALL');
      switchView('assignments');
    });

    els.sidebarCourseList.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-course-id]');
      if (!btn) return;
      selectCourse(btn.dataset.courseId);
    });

    els.courseSelect.addEventListener('change', updateSelectedCourseChip);

    els.scrollToRegisterBtn.addEventListener('click', () => {
      switchView('assignments');
      clearAlerts();
      els.registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      els.titleInput.focus();
    });

    els.fileInput.addEventListener('change', () => {
      const file = els.fileInput.files && els.fileInput.files[0];
      els.selectedFileLabel.textContent = file
        ? `선택된 파일: ${file.name} (${Math.max(1, Math.round(file.size / 1024))} KB)`
        : '지원 형식: PDF, HWP, DOCX, ZIP, TXT (최대 50MB)';
    });

    ['dragenter', 'dragover'].forEach((evt) => {
      els.fileDropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        els.fileDropzone.classList.add('is-dragover');
      });
    });

    ['dragleave', 'drop'].forEach((evt) => {
      els.fileDropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        els.fileDropzone.classList.remove('is-dragover');
      });
    });

    els.resetFormBtn.addEventListener('click', () => {
      els.form.reset();
      clearAlerts();
      els.selectedFileLabel.textContent = '지원 형식: PDF, HWP, DOCX, ZIP, TXT (최대 50MB)';
      updateSelectedCourseChip();
    });

    els.form.addEventListener('submit', handleAssignmentSubmit);

    els.statusFilter.addEventListener('change', () => {
      state.statusFilter = els.statusFilter.value;
      renderAssignmentStatsAndTable();
    });

    els.searchInput.addEventListener('input', () => {
      state.searchQuery = els.searchInput.value;
      renderAssignmentStatsAndTable();
    });

    els.assignmentTbody.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const id = Number(btn.dataset.id);
      const item = state.assignments.find((a) => a.id === id);
      if (!item) return;

      if (btn.dataset.action === 'detail') {
        openDetailModal(id);
      } else if (btn.dataset.action === 'prefill') {
        prefillForSubmission(item);
      }
    });

    els.coursesGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-enter-course]');
      if (!btn) return;
      selectCourse(btn.dataset.enterCourse);
      switchView('assignments');
    });

    els.closeModalBtn.addEventListener('click', closeDetailModal);
    els.modalCancelBtn.addEventListener('click', closeDetailModal);
    els.modal.addEventListener('click', (e) => {
      if (e.target === els.modal) closeDetailModal();
    });
    els.modalSubmitShortcutBtn.addEventListener('click', () => {
      const target = state.selectedAssignment;
      closeDetailModal();
      if (target) prefillForSubmission(target);
    });
  }

  bindEvents();
  loadInitialData();
})();

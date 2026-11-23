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
      color: 'linear-gradient(135deg, #003876 0%, #0284c7 100%)'
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
      color: 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)'
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
      color: 'linear-gradient(135deg, #0e7490 0%, #2563eb 100%)'
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
      color: 'linear-gradient(135deg, #312e81 0%, #db2777 100%)'
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
    canvas: document.getElementById('particle-canvas'),
    particleBurstBtn: document.getElementById('particle-burst-btn'),
    particleToggleBtn: document.getElementById('particle-toggle-btn'),
    particleCounter: document.getElementById('particle-counter'),

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
    barSubmitted: document.getElementById('bar-submitted'),
    barPending: document.getElementById('bar-pending'),

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

  /* =========================================================
     멀티레이어 인터랙티브 파티클 캔버스 엔진
     ========================================================= */
  const particleFX = {
    enabled: true,
    burst: () => {},
    errorBurst: () => {}
  };

  function initParticleEngine() {
    const canvas = els.canvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COLORS = ['#00e5ff', '#38bdf8', '#60a5fa', '#a855f7', '#ec4899', '#e0f2fe'];
    const ERROR_COLORS = ['#fb7185', '#f43f5e', '#fda4af', '#f97316'];

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const pointer = { x: width * 0.5, y: height * 0.35, active: false };
    const nodes = [];
    const sparks = [];
    const waves = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createNodes() {
      nodes.length = 0;
      const count = Math.max(75, Math.min(125, Math.floor((width * height) / 14500)));
      for (let i = 0; i < count; i++) {
        const depth = 0.4 + Math.random() * 1.1;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55 * depth,
          vy: (Math.random() - 0.5) * 0.55 * depth,
          radius: (1.1 + Math.random() * 2.1) * depth,
          color: COLORS[i % COLORS.length],
          phase: Math.random() * Math.PI * 2,
          depth
        });
      }
      if (els.particleCounter) {
        els.particleCounter.textContent = `${nodes.length} nodes`;
      }
    }

    function spawnBurst(x, y, count = 20, palette = COLORS, ringColor = '#38bdf8') {
      if (!particleFX.enabled) return;
      waves.push({
        x,
        y,
        radius: 6,
        maxRadius: count > 40 ? 220 : 110,
        alpha: 0.78,
        color: ringColor
      });
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
        const speed = 1.4 + Math.random() * (count > 40 ? 6.5 : 4.2);
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.4 + Math.random() * 2.5,
          alpha: 1,
          decay: 0.015 + Math.random() * 0.02,
          color: palette[Math.floor(Math.random() * palette.length)]
        });
      }
    }

    particleFX.burst = (x = width * 0.5, y = height * 0.42) => {
      spawnBurst(x, y, 56, COLORS, '#00e5ff');
      setTimeout(() => spawnBurst(x - 110, y + 40, 28, COLORS, '#a855f7'), 120);
      setTimeout(() => spawnBurst(x + 110, y - 35, 28, COLORS, '#ec4899'), 220);
    };

    particleFX.errorBurst = (x = width * 0.5, y = height * 0.5) => {
      spawnBurst(x, y, 36, ERROR_COLORS, '#fb7185');
    };

    let lastTrailTime = 0;
    window.addEventListener('pointermove', (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;

      const now = performance.now();
      if (particleFX.enabled && now - lastTrailTime > 30) {
        lastTrailTime = now;
        sparks.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9 - 0.3,
          radius: 1.2 + Math.random() * 1.6,
          alpha: 0.85,
          decay: 0.028,
          color: COLORS[Math.floor(Math.random() * COLORS.length)]
        });
      }
    });

    window.addEventListener('pointerleave', () => {
      pointer.active = false;
    });

    window.addEventListener('click', (e) => {
      spawnBurst(e.clientX, e.clientY, 16, COLORS, '#38bdf8');
    });

    window.addEventListener('resize', () => {
      resize();
      createNodes();
    });

    if (els.particleBurstBtn) {
      els.particleBurstBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        particleFX.burst(window.innerWidth * 0.5, window.innerHeight * 0.36);
      });
    }

    if (els.particleToggleBtn) {
      els.particleToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        particleFX.enabled = !particleFX.enabled;
        els.particleToggleBtn.classList.toggle('is-on', particleFX.enabled);
        els.particleToggleBtn.textContent = particleFX.enabled ? '파티클 ON' : '파티클 OFF';
        if (!particleFX.enabled) {
          ctx.clearRect(0, 0, width, height);
        }
      });
    }

    function renderFrame(time) {
      requestAnimationFrame(renderFrame);
      if (!particleFX.enabled) return;

      ctx.clearRect(0, 0, width, height);

      // 1. 파티클 위치 업데이트 + 별자리 연결선
      const linkDist = 135;
      const mouseDist = 185;

      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseDist && dist > 1) {
            const force = (1 - dist / mouseDist) * 0.018;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;

            // 마우스와 파티클 사이 네온 필라멘트
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - dist / mouseDist) * 0.48})`;
            ctx.lineWidth = 1.1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }

        // 속도 안정화
        p.vx *= 0.994;
        p.vy *= 0.994;
        const speed = Math.hypot(p.vx, p.vy);
        if (speed < 0.15) {
          p.vx += (Math.random() - 0.5) * 0.06;
          p.vy += (Math.random() - 0.5) * 0.06;
        }
      }

      // 노드 간 별자리 연결
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < linkDist * linkDist) {
            const alpha = (1 - Math.sqrt(distSq) / linkDist) * 0.24;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 노드 렌더링 (트윙클링 + 글로우)
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        const twinkle = 0.55 + 0.45 * Math.sin(time * 0.0025 + p.phase);
        ctx.save();
        ctx.globalAlpha = twinkle;
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. 쇼크웨이브 링 렌더링
      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        w.radius += (w.maxRadius - w.radius) * 0.1 + 1.8;
        w.alpha *= 0.91;
        if (w.alpha < 0.02 || w.radius >= w.maxRadius) {
          waves.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = w.alpha;
        ctx.strokeStyle = w.color;
        ctx.shadowBlur = 16;
        ctx.shadowColor = w.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 3. 스파크 파티클 렌더링
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.96;
        s.vy *= 0.96;
        s.alpha -= s.decay;
        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = s.color;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 파티클 수 과다 방지
      if (sparks.length > 260) {
        sparks.splice(0, sparks.length - 260);
      }
    }

    resize();
    createNodes();
    requestAnimationFrame(renderFrame);
  }

  /* =========================================================
     마그네틱 스포트라이트 & 3D 틸트 카드 효과
     ========================================================= */
  function initVisualEffects() {
    document.querySelectorAll('.spotlight-card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
      });
    });

    document.querySelectorAll('.tilt-card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* =========================================================
     한성 e-class 핵심 상태 및 과제 로직
     ========================================================= */
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
    const totalCount = courseScoped.length;
    const submittedCount = courseScoped.filter((item) => item.status === '제출 완료').length;
    const pendingCount = courseScoped.filter((item) => item.status !== '제출 완료').length;

    els.statTotal.textContent = String(totalCount);
    els.statSubmitted.textContent = String(submittedCount);
    els.statPending.textContent = String(pendingCount);

    if (els.barSubmitted) {
      els.barSubmitted.style.width = `${totalCount ? Math.round((submittedCount / totalCount) * 100) : 0}%`;
    }
    if (els.barPending) {
      els.barPending.style.width = `${totalCount ? Math.round((pendingCount / totalCount) * 100) : 0}%`;
    }

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
              <button type="button" class="btn btn-glass btn-sm" data-action="${actionType}" data-id="${item.id}">
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
              <button type="button" class="btn btn-neon btn-sm" data-enter-course="${escapeHtml(course.id)}">
                <span class="btn-glow-layer" aria-hidden="true"></span>
                <span>강의실 과제 보기</span>
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

    const btnRect = els.submitBtn ? els.submitBtn.getBoundingClientRect() : null;
    if (btnRect) {
      particleFX.errorBurst(btnRect.left + btnRect.width * 0.5, btnRect.top + btnRect.height * 0.5);
    } else {
      particleFX.errorBurst();
    }
  }

  function showSuccessAlert(message) {
    els.errorAlert.hidden = true;
    els.successAlert.textContent = message;
    els.successAlert.hidden = false;
  }

  function setSubmitButtonLabel(text) {
    const labelSpan = els.submitBtn.querySelector('.submit-btn-text');
    if (labelSpan) {
      labelSpan.textContent = text;
    } else {
      els.submitBtn.textContent = text;
    }
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
    setSubmitButtonLabel('등록 중...');

    // [INTENTIONAL BUG]
    // 서버 API(POST /api/assignments)는 필수 필드명으로 `title`을 검증하지만,
    // 프론트엔드가 오타 필드명 `assignment_title`로 전송하여 과제 등록이 항상 실패합니다.
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
      particleFX.burst();
    } finally {
      els.submitBtn.disabled = false;
      setSubmitButtonLabel('과제 등록');
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

  initParticleEngine();
  initVisualEffects();
  bindEvents();
  loadInitialData();
})();

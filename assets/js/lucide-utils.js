/**
 * Lucide Icons Utility for SAEROM
 * SAEROM에서 Lucide 아이콘을 쉽게 사용할 수 있는 유틸리티 함수들
 */

class LucideIconManager {
    constructor() {
        this.initialized = false;
        this.iconMap = {
            // SAEROM에서 실제로 사용되는 아이콘들만 유지
            'menu': 'menu',
            'check-square': 'check-square',
            'home': 'home',
            'building-2': 'building-2',
            'users': 'users',
            'settings': 'settings',
            'x': 'x',
            'mail': 'mail',
            'shield': 'shield',
            'calculator': 'calculator',
            'trending-up': 'trending-up',
            'activity': 'activity',
            'message-square': 'message-square',
            'user': 'user',
            'user-plus': 'user-plus',
            'calendar': 'calendar'
        };
    }

    // 아이콘 초기화
    initLucide() {
        if (typeof lucide !== 'undefined' && !this.initialized) {
            lucide.createIcons();
            this.initialized = true;
            console.log('Lucide Icons initialized successfully');
        } else if (!this.initialized) {
            console.warn('Lucide library not found');
        }
    }

    // 아이콘 생성 헬퍼 함수
    createIcon(iconName, options = {}) {
        const defaultOptions = {
            size: 'default', // sm, default, lg, xl
            color: 'secondary', // primary, secondary, success, warning, danger, white
            class: ''
        };
        
        const opts = { ...defaultOptions, ...options };
        const classNames = `lucide-icon lucide-icon-${opts.size} lucide-icon-${opts.color} ${opts.class}`.trim();
        
        return `<i data-lucide="${iconName}" class="${classNames}"></i>`;
    }
}

// 전역 인스턴스 생성
window.LucideManager = new LucideIconManager();

// DOM 로드 완료 시 자동 초기화
document.addEventListener('DOMContentLoaded', function() {
    LucideManager.initLucide();
});

// jQuery 플러그인으로도 제공
if (typeof jQuery !== 'undefined') {
    jQuery.fn.lucideIcon = function(iconName, options = {}) {
        return this.each(function() {
            const $this = jQuery(this);
            if ($this.find('i[data-lucide]').length === 0) {
                $this.prepend(LucideManager.createIcon(iconName, options));
            }
        });
    };
}